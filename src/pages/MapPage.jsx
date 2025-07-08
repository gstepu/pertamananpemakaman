"use client";

import { useState, useEffect, useRef } from "react";

const MapPage = ({ onNavigate }) => {
  const [selectedLayers, setSelectedLayers] = useState({
    tpu: true,
    rth: true,
    kelurahan: false,
  });
  const [mapType, setMapType] = useState("satellite");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: -6.2088, lng: 106.8456 }); // Jakarta center
  const [zoomLevel, setZoomLevel] = useState(11);

  const [isControlsVisible, setIsControlsVisible] = useState(false);

  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);

  // Real coordinates for TPU locations in Jakarta
  const tpuLocations = [
    {
      id: 1,
      name: "TPU Tanah Kusir",
      type: "tpu",
      address: "Jl. Benda Raya, Kemang, Jakarta Selatan",
      area: "45 Ha",
      capacity: "150,000 makam",
      facilities: ["Masjid", "Toilet", "Parkir", "Kantor Pengelola"],
      coordinates: { lat: -6.2615, lng: 106.7834 },
      phone: "(021) 7194567",
      operatingHours: "06:00 - 18:00 WIB",
    },
    {
      id: 2,
      name: "TPU Pondok Kelapa",
      type: "tpu",
      address: "Jl. Pondok Kelapa, Jakarta Timur",
      area: "25 Ha",
      capacity: "80,000 makam",
      facilities: ["Masjid", "Toilet", "Parkir"],
      coordinates: { lat: -6.2234, lng: 106.9234 },
      phone: "(021) 8611234",
      operatingHours: "06:00 - 18:00 WIB",
    },
    {
      id: 3,
      name: "TPU Menteng Pulo",
      type: "tpu",
      address: "Jl. Menteng Pulo, Jakarta Selatan",
      area: "12 Ha",
      capacity: "45,000 makam",
      facilities: ["Masjid", "Toilet", "Parkir"],
      coordinates: { lat: -6.2456, lng: 106.8456 },
      phone: "(021) 8301234",
      operatingHours: "06:00 - 18:00 WIB",
    },
    {
      id: 4,
      name: "TPU Karet Bivak",
      type: "tpu",
      address: "Jl. Karet Bivak, Jakarta Pusat",
      area: "8 Ha",
      capacity: "35,000 makam",
      facilities: ["Masjid", "Toilet", "Parkir"],
      coordinates: { lat: -6.2088, lng: 106.82 },
      phone: "(021) 5701234",
      operatingHours: "06:00 - 18:00 WIB",
    },
  ];

  // Real coordinates for RTH locations in Jakarta
  const rthLocations = [
    {
      id: 5,
      name: "Taman Suropati",
      type: "rth",
      address: "Jl. Taman Suropati, Menteng, Jakarta Pusat",
      area: "16,322 m²",
      facilities: ["Jogging Track", "Amphitheater", "Toilet", "Parkir"],
      activities: ["Senam Pagi", "Jogging", "Pertunjukan Seni"],
      coordinates: { lat: -6.1944, lng: 106.8294 },
      openingHours: "05:00 - 22:00 WIB",
    },
    {
      id: 6,
      name: "Taman Menteng",
      type: "rth",
      address: "Jl. HOS Cokroaminoto, Menteng, Jakarta Pusat",
      area: "30,000 m²",
      facilities: ["Playground", "Lapangan", "Gazebo", "Toilet"],
      activities: ["Bermain Anak", "Olahraga", "Piknik"],
      coordinates: { lat: -6.1889, lng: 106.8278 },
      openingHours: "05:00 - 22:00 WIB",
    },
    {
      id: 7,
      name: "Taman Langsat",
      type: "rth",
      address: "Jl. Langsat, Kebayoran Baru, Jakarta Selatan",
      area: "8,500 m²",
      facilities: ["Lapangan", "Gazebo", "Toilet", "Parkir"],
      activities: ["Olahraga", "Gathering", "Fotografi"],
      coordinates: { lat: -6.2344, lng: 106.8123 },
      openingHours: "05:00 - 22:00 WIB",
    },
    {
      id: 8,
      name: "Taman Cattleya",
      type: "rth",
      address: "Jl. Cattleya, Tomang, Jakarta Barat",
      area: "12,000 m²",
      facilities: ["Lapangan", "Gazebo", "Toilet"],
      activities: ["Olahraga", "Senam", "Gathering"],
      coordinates: { lat: -6.1756, lng: 106.7889 },
      openingHours: "05:00 - 22:00 WIB",
    },
    {
      id: 9,
      name: "Taman Tebet",
      type: "rth",
      address: "Jl. Tebet Raya, Jakarta Selatan",
      area: "15,000 m²",
      facilities: ["Jogging Track", "Lapangan", "Toilet", "Parkir"],
      activities: ["Jogging", "Olahraga", "Piknik"],
      coordinates: { lat: -6.2267, lng: 106.8567 },
      openingHours: "05:00 - 22:00 WIB",
    },
  ];

  const allLocations = [...tpuLocations, ...rthLocations];

  // Initialize Leaflet Map
  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Add Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
          "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";

        script.onload = () => {
          initializeMap();
        };

        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current && window.L && !leafletMapRef.current) {
        // Initialize map
        leafletMapRef.current = window.L.map(mapRef.current, {
          zoomControl: false, // Disable default zoom control
        }).setView([mapCenter.lat, mapCenter.lng], zoomLevel);

        // Add tile layers
        const osmLayer = window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
          }
        );

        const satelliteLayer = window.L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              "Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
            maxZoom: 19,
          }
        );

        // Set initial layer based on mapType
        if (mapType === "satellite") {
          satelliteLayer.addTo(leafletMapRef.current);
        } else {
          osmLayer.addTo(leafletMapRef.current);
        }

        // Store layers for switching
        leafletMapRef.current.osmLayer = osmLayer;
        leafletMapRef.current.satelliteLayer = satelliteLayer;

        // Add markers
        updateMarkers();

        // Add event listeners
        leafletMapRef.current.on("zoomend", () => {
          setZoomLevel(leafletMapRef.current.getZoom());
        });

        leafletMapRef.current.on("moveend", () => {
          const center = leafletMapRef.current.getCenter();
          setMapCenter({ lat: center.lat, lng: center.lng });
        });
      }
    };

    loadLeaflet();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Update map type
  useEffect(() => {
    if (leafletMapRef.current) {
      if (mapType === "satellite") {
        leafletMapRef.current.removeLayer(leafletMapRef.current.osmLayer);
        leafletMapRef.current.addLayer(leafletMapRef.current.satelliteLayer);
      } else {
        leafletMapRef.current.removeLayer(leafletMapRef.current.satelliteLayer);
        leafletMapRef.current.addLayer(leafletMapRef.current.osmLayer);
      }
    }
  }, [mapType]);

  // Update markers when layers change
  useEffect(() => {
    updateMarkers();
  }, [selectedLayers, searchQuery]);

  const updateMarkers = () => {
    if (!leafletMapRef.current || !window.L) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => {
      leafletMapRef.current.removeLayer(marker);
    });
    markersRef.current = [];

    // Filter locations
    const filteredLocations = allLocations.filter((location) => {
      const matchesSearch =
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLayer =
        (location.type === "tpu" && selectedLayers.tpu) ||
        (location.type === "rth" && selectedLayers.rth);
      return matchesSearch && matchesLayer;
    });

    // Add new markers
    filteredLocations.forEach((location) => {
      const iconColor = location.type === "tpu" ? "#dc2626" : "#16a34a";
      const iconHtml = `
        <div style="
          background-color: ${iconColor};
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            color: white;
            font-size: 14px;
            font-weight: bold;
            transform: rotate(45deg);
          ">
            ${location.type === "tpu" ? "⚰" : "🌳"}
          </div>
        </div>
      `;

      const customIcon = window.L.divIcon({
        html: iconHtml,
        className: "custom-marker",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      const marker = window.L.marker(
        [location.coordinates.lat, location.coordinates.lng],
        {
          icon: customIcon,
        }
      ).addTo(leafletMapRef.current);

      // Add popup
      const popupContent = `
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: ${iconColor}; font-size: 16px; font-weight: bold;">
            ${location.name}
          </h3>
          <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">
            <strong>Alamat:</strong> ${location.address}
          </p>
          <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">
            <strong>Luas:</strong> ${location.area}
          </p>
          ${
            location.capacity
              ? `
            <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">
              <strong>Kapasitas:</strong> ${location.capacity}
            </p>
          `
              : ""
          }
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">
            <strong>Jam:</strong> ${
              location.operatingHours || location.openingHours
            }
          </p>
          <button 
            onclick="window.showLocationDetails(${location.id})"
            style="
              background: ${iconColor};
              color: white;
              border: none;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 12px;
              cursor: pointer;
            "
          >
            Detail Lengkap
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);

      // Add click event
      marker.on("click", () => {
        handleLocationClick(location);
      });

      markersRef.current.push(marker);
    });
  };

  // Global function for popup button
  useEffect(() => {
    window.showLocationDetails = (locationId) => {
      const location = allLocations.find((loc) => loc.id === locationId);
      if (location) {
        handleLocationClick(location);
      }
    };

    return () => {
      delete window.showLocationDetails;
    };
  }, []);

  const handleLayerToggle = (layer) => {
    setSelectedLayers((prev) => ({
      ...prev,
      [layer]: !prev[layer],
    }));
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setIsInfoPanelOpen(true);

    // Center map on selected location
    if (leafletMapRef.current) {
      leafletMapRef.current.setView(
        [location.coordinates.lat, location.coordinates.lng],
        Math.max(zoomLevel, 15)
      );
    }
  };

  const handleZoomIn = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.zoomOut();
    }
  };

  const InfoPanel = () => {
    if (!selectedLocation) return null;

    return (
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-xl p-4 max-w-sm z-[1000] max-h-96 overflow-y-auto">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              {selectedLocation.name}
            </h3>
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                selectedLocation.type === "tpu"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {selectedLocation.type === "tpu"
                ? "Taman Pemakaman Umum"
                : "Ruang Terbuka Hijau"}
            </span>
          </div>
          <button
            onClick={() => setIsInfoPanelOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-600 mb-1 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              Alamat:
            </p>
            <p className="text-gray-800">{selectedLocation.address}</p>
          </div>

          <div>
            <p className="text-gray-600 mb-1 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2"
                />
              </svg>
              Luas Area:
            </p>
            <p className="text-gray-800">{selectedLocation.area}</p>
          </div>

          {selectedLocation.capacity && (
            <div>
              <p className="text-gray-600 mb-1 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Kapasitas:
              </p>
              <p className="text-gray-800">{selectedLocation.capacity}</p>
            </div>
          )}

          {selectedLocation.phone && (
            <div>
              <p className="text-gray-600 mb-1 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Telepon:
              </p>
              <p className="text-gray-800">{selectedLocation.phone}</p>
            </div>
          )}

          <div>
            <p className="text-gray-600 mb-1 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Jam Operasional:
            </p>
            <p className="text-gray-800">
              {selectedLocation.operatingHours || selectedLocation.openingHours}
            </p>
          </div>

          <div>
            <p className="text-gray-600 mb-2">Fasilitas:</p>
            <div className="flex flex-wrap gap-1">
              {selectedLocation.facilities.map((facility, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  {facility}
                </span>
              ))}
            </div>
          </div>

          {selectedLocation.activities && (
            <div>
              <p className="text-gray-600 mb-2">Kegiatan:</p>
              <div className="flex flex-wrap gap-1">
                {selectedLocation.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  if (leafletMapRef.current) {
                    leafletMapRef.current.setView(
                      [
                        selectedLocation.coordinates.lat,
                        selectedLocation.coordinates.lng,
                      ],
                      18
                    );
                  }
                }}
                className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-green-700 transition-colors"
              >
                Zoom ke Lokasi
              </button>
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-blue-700 transition-colors">
                Info Lengkap
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Map Container */}
        <div className="relative h-screen overflow-hidden">
          {/* Search Bar */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000]">
            <div className="bg-white rounded-lg shadow-lg p-4 w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari lokasi TPU atau RTH..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <svg
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Layer Control Icon */}
          <div
            className="absolute top-4 right-4 z-[1000]"
            onMouseEnter={() => setIsControlsVisible(true)}
            onMouseLeave={() => setIsControlsVisible(false)}
          >
            {/* Layer Icon */}
            <div className="bg-white rounded-lg shadow-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </div>

            {/* Map Controls Panel */}
            {isControlsVisible && (
              <div className="absolute top-0 right-0 bg-white rounded-lg shadow-xl p-4 w-64 mt-12">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Kontrol Peta
                </h3>

                {/* Map Type */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Jenis Peta:
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="mapType"
                        value="satellite"
                        checked={mapType === "satellite"}
                        onChange={(e) => setMapType(e.target.value)}
                        className="mr-2 text-green-600"
                      />
                      <span className="text-sm">Satelit</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="mapType"
                        value="street"
                        checked={mapType === "street"}
                        onChange={(e) => setMapType(e.target.value)}
                        className="mr-2 text-green-600"
                      />
                      <span className="text-sm">Jalan</span>
                    </label>
                  </div>
                </div>

                {/* Layer Controls */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Tampilkan Layer:
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedLayers.tpu}
                        onChange={() => handleLayerToggle("tpu")}
                        className="mr-2 text-red-600"
                      />
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                        TPU ({tpuLocations.length})
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedLayers.rth}
                        onChange={() => handleLayerToggle("rth")}
                        className="mr-2 text-green-600"
                      />
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                        RTH ({rthLocations.length})
                      </span>
                    </label>
                  </div>
                </div>

                {/* Zoom Level Display */}
                <div className="text-xs text-gray-500">
                  Zoom Level: {zoomLevel}
                </div>
              </div>
            )}
          </div>

          {/* Leaflet Map Container */}
          <div ref={mapRef} className="w-full h-full" style={{ zIndex: 1 }} />

          {/* Custom Zoom Controls */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg z-[1000]">
            <button
              onClick={handleZoomIn}
              className="block w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-t-lg border-b transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <button
              onClick={handleZoomOut}
              className="block w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-b-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
          </div>

          {/* Coordinates Display */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs z-[1000]">
            Center: {mapCenter.lat.toFixed(4)}, {mapCenter.lng.toFixed(4)}
          </div>

          {/* Info Panel */}
          {isInfoPanelOpen && <InfoPanel />}
        </div>
      </main>
    </div>
  );
};

export default MapPage;
