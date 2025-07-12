"use client";
import { useState } from "react";

const SeedlingApplicationPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    selectedLocation: "",
    applicantName: "",
    applicantType: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    plantingLocation: "",
    seedlingTypes: [],
    totalQuantity: "",
    plantingPurpose: "",
    plantingDate: "",
    landArea: "",
    soilType: "",
    waterSource: "",
    careCommitment: "",
    description: "",
    specialRequirements: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // List of areas in DKI Jakarta for seedling distribution
  const availableLocations = [
    {
      id: 1,
      name: "Jakarta Pusat",
      areas: [
        "Menteng",
        "Gambir",
        "Tanah Abang",
        "Senen",
        "Cempaka Putih",
        "Johar Baru",
        "Kemayoran",
        "Sawah Besar",
      ],
      contact: "021-3441054",
      distribution: "Balai Kota DKI Jakarta",
    },
    {
      id: 2,
      name: "Jakarta Utara",
      areas: [
        "Penjaringan",
        "Pademangan",
        "Tanjung Priok",
        "Koja",
        "Kelapa Gading",
        "Cilincing",
      ],
      contact: "021-4372093",
      distribution: "Kantor Walikota Jakarta Utara",
    },
    {
      id: 3,
      name: "Jakarta Barat",
      areas: [
        "Grogol Petamburan",
        "Taman Sari",
        "Tambora",
        "Kebon Jeruk",
        "Kalideres",
        "Palmerah",
        "Cengkareng",
        "Kembangan",
      ],
      contact: "021-5694128",
      distribution: "Kantor Walikota Jakarta Barat",
    },
    {
      id: 4,
      name: "Jakarta Selatan",
      areas: [
        "Kebayoran Baru",
        "Kebayoran Lama",
        "Pesanggrahan",
        "Cilandak",
        "Pasar Minggu",
        "Jagakarsa",
        "Mampang Prapatan",
        "Pancoran",
        "Tebet",
        "Setia Budi",
      ],
      contact: "021-7221570",
      distribution: "Kantor Walikota Jakarta Selatan",
    },
    {
      id: 5,
      name: "Jakarta Timur",
      areas: [
        "Matraman",
        "Pulogadung",
        "Jatinegara",
        "Cakung",
        "Duren Sawit",
        "Kramat Jati",
        "Makasar",
        "Pasar Rebo",
        "Ciracas",
        "Cipayung",
      ],
      contact: "021-8191264",
      distribution: "Kantor Walikota Jakarta Timur",
    },
  ];

  const seedlingCategories = [
    {
      category: "Pohon Pelindung",
      types: [
        { name: "Trembesi", maxQty: 5 },
        { name: "Mahoni", maxQty: 10 },
        { name: "Flamboyan", maxQty: 5 },
        { name: "Angsana", maxQty: 8 },
        { name: "Tanjung", maxQty: 10 },
      ],
    },
    {
      category: "Pohon Buah",
      types: [
        { name: "Mangga", maxQty: 3 },
        { name: "Jambu Air", maxQty: 5 },
        { name: "Rambutan", maxQty: 3 },
        { name: "Alpukat", maxQty: 3 },
        { name: "Belimbing", maxQty: 5 },
      ],
    },
    {
      category: "Tanaman Hias",
      types: [
        { name: "Bougenville", maxQty: 15 },
        { name: "Kembang Sepatu", maxQty: 20 },
        { name: "Melati", maxQty: 15 },
        { name: "Mawar", maxQty: 10 },
        { name: "Alamanda", maxQty: 15 },
      ],
    },
    {
      category: "Tanaman Obat",
      types: [
        { name: "Jahe", maxQty: 25 },
        { name: "Kunyit", maxQty: 25 },
        { name: "Temulawak", maxQty: 20 },
        { name: "Lidah Buaya", maxQty: 15 },
        { name: "Sirih", maxQty: 20 },
      ],
    },
  ];

  const plantingPurposes = [
    "Penghijauan Lingkungan",
    "Taman Rumah/Pribadi",
    "Taman Komunitas/RT/RW",
    "Sekolah/Pendidikan",
    "Kantor/Instansi",
    "Konservasi Lingkungan",
    "Program CSR",
    "Lainnya",
  ];

  const applicantTypes = [
    "Warga/Individu",
    "RT/RW",
    "Komunitas",
    "Sekolah/Universitas",
    "Perusahaan",
    "Instansi Pemerintah",
    "Organisasi Non-Profit",
  ];

  const soilTypes = [
    "Tanah Liat",
    "Tanah Berpasir",
    "Tanah Humus",
    "Tanah Campuran",
    "Tidak Tahu",
  ];

  const waterSources = [
    "Air Sumur",
    "Air PAM",
    "Air Hujan",
    "Irigasi",
    "Manual/Siram",
  ];

  // Filter locations based on search term
  const filteredLocations = availableLocations.filter(
    (location) =>
      location.name.toLowerCase().includes(locationSearchTerm.toLowerCase()) ||
      location.areas.some((area) =>
        area.toLowerCase().includes(locationSearchTerm.toLowerCase())
      )
  );

  const selectedLocationData = availableLocations.find(
    (location) => location.id.toString() === formData.selectedLocation
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleLocationSelect = (location) => {
    setFormData((prev) => ({
      ...prev,
      selectedLocation: location.id.toString(),
    }));
    setLocationSearchTerm("");
    setIsLocationDropdownOpen(false);
    // Clear error if exists
    if (errors.selectedLocation) {
      setErrors((prev) => ({
        ...prev,
        selectedLocation: "",
      }));
    }
  };

  const handleSeedlingTypeChange = (category, type, quantity) => {
    const newSeedlingTypes = [...formData.seedlingTypes];
    const existingIndex = newSeedlingTypes.findIndex(
      (item) => item.category === category && item.type === type.name
    );

    if (quantity > 0) {
      const seedlingItem = {
        category,
        type: type.name,
        quantity: Math.min(quantity, type.maxQty),
        maxQty: type.maxQty,
      };

      if (existingIndex >= 0) {
        newSeedlingTypes[existingIndex] = seedlingItem;
      } else {
        newSeedlingTypes.push(seedlingItem);
      }
    } else {
      if (existingIndex >= 0) {
        newSeedlingTypes.splice(existingIndex, 1);
      }
    }

    const total = newSeedlingTypes.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    setFormData((prev) => ({
      ...prev,
      seedlingTypes: newSeedlingTypes,
      totalQuantity: total.toString(),
    }));
  };

  const getSeedlingQuantity = (category, typeName) => {
    const item = formData.seedlingTypes.find(
      (item) => item.category === category && item.type === typeName
    );
    return item ? item.quantity : 0;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.selectedLocation)
      newErrors.selectedLocation = "Wilayah wajib dipilih";
    if (!formData.applicantName.trim())
      newErrors.applicantName = "Nama pemohon wajib diisi";
    if (!formData.applicantType)
      newErrors.applicantType = "Jenis pemohon wajib dipilih";
    if (!formData.contactPerson.trim())
      newErrors.contactPerson = "Nama penanggung jawab wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    if (!formData.phone.trim()) newErrors.phone = "Nomor telepon wajib diisi";
    if (!formData.address.trim())
      newErrors.address = "Alamat lengkap wajib diisi";
    if (!formData.plantingLocation.trim())
      newErrors.plantingLocation = "Lokasi penanaman wajib diisi";
    if (formData.seedlingTypes.length === 0)
      newErrors.seedlingTypes = "Minimal pilih satu jenis bibit";
    if (!formData.plantingPurpose)
      newErrors.plantingPurpose = "Tujuan penanaman wajib dipilih";
    if (!formData.plantingDate)
      newErrors.plantingDate = "Tanggal penanaman wajib diisi";
    if (!formData.careCommitment)
      newErrors.careCommitment = "Komitmen perawatan wajib dipilih";
    if (!formData.description.trim())
      newErrors.description = "Deskripsi rencana penanaman wajib diisi";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Anda harus menyetujui syarat dan ketentuan";

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    // Phone validation
    if (formData.phone && !/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
    }

    // Date validation (must be future date)
    if (formData.plantingDate) {
      const selectedDate = new Date(formData.plantingDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.plantingDate = "Tanggal penanaman harus di masa depan";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Seedling application submitted:", formData);
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onNavigate("landing");
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Confirmation Modal Component
  const ConfirmationModal = () => {
    if (!showConfirmation) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
          {/* Modal Header */}
          <div className="bg-green-600 text-white p-3 rounded-t-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <h2 className="text-base font-semibold">Konfirmasi Permohonan</h2>
            </div>
          </div>
          {/* Modal Content */}
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-3">
              Apakah Anda yakin ingin mengirim permohonan bibit tanaman dengan
              detail berikut?
            </p>
            {/* Summary Information */}
            <div className="bg-green-50 rounded-lg p-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Wilayah:</span>
                <span className="text-gray-800">
                  {selectedLocationData?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Pemohon:</span>
                <span className="text-gray-800">{formData.applicantName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Total Bibit:</span>
                <span className="text-gray-800">
                  {formData.totalQuantity} bibit
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Tujuan:</span>
                <span className="text-gray-800">
                  {formData.plantingPurpose}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">
                  Tanggal Tanam:
                </span>
                <span className="text-gray-800">
                  {formatDate(formData.plantingDate)}
                </span>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-xs text-blue-800">
                  <p className="font-medium">Informasi Penting:</p>
                  <p>
                    Setelah permohonan disetujui, bibit akan tersedia untuk
                    diambil dalam 7-14 hari kerja. Pastikan semua informasi
                    sudah benar sebelum mengirim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Footer */}
          <div className="bg-gray-50 px-4 py-3 rounded-b-lg flex justify-end space-x-2">
            <button
              onClick={handleCancelSubmit}
              className="px-3 py-1.5 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              Batal
            </button>
            <button
              onClick={handleConfirmSubmit}
              className="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Ya, Kirim Permohonan
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Success Modal Component
  const SuccessModal = () => {
    if (!showSuccess) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
          {/* Modal Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold">
                Permohonan Berhasil Dikirim!
              </h2>
            </div>
          </div>
          {/* Modal Content */}
          <div className="p-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Terima kasih atas permohonan Anda
              </h3>
              <p className="text-gray-600 text-sm">
                Permohonan bibit tanaman sebanyak{" "}
                <strong>{formData.totalQuantity} bibit</strong> untuk wilayah{" "}
                <strong>{selectedLocationData?.name}</strong> telah berhasil
                dikirim.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-left">
                  <h4 className="font-medium text-blue-800 text-sm mb-1">
                    Langkah Selanjutnya:
                  </h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>
                      • Tim akan meninjau permohonan Anda dalam 3-5 hari kerja
                    </li>
                    <li>
                      • Konfirmasi akan dikirim ke email:{" "}
                      <strong>{formData.email}</strong>
                    </li>
                    <li>
                      • Bibit akan tersedia untuk diambil dalam 7-14 hari kerja
                    </li>
                    <li>
                      • Lokasi pengambilan:{" "}
                      <strong>{selectedLocationData?.distribution}</strong>
                    </li>
                    <li>
                      • Hubungi:{" "}
                      <strong>{selectedLocationData?.contact}</strong> untuk
                      informasi lebih lanjut
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-green-800">
                  Nomor Referensi: #SBT
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Simpan nomor referensi di atas untuk keperluan follow-up
            </p>
          </div>
          {/* Modal Footer */}
          <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
            <div className="flex justify-center space-x-3">
              <button
                onClick={handleSuccessClose}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0h3m0 0h3m0 0a1 1 0 001-1V10M9 21v-6a1 1 0 011-1h2a1 1 0 011 1v6"
                  />
                </svg>
                Kembali ke Beranda
              </button>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Ajukan Lagi
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
        {/* Form Content */}
        <div className="container mx-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Form Permohonan Bibit Tanaman
                </h2>
                <p className="text-green-100">
                  Lengkapi formulir di bawah ini untuk mengajukan permohonan
                  bibit tanaman gratis
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Location Selection Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Pilih Wilayah
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Wilayah Jakarta <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div
                          className={`w-full px-3 py-2 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            errors.selectedLocation
                              ? "border-red-500"
                              : "border-gray-300"
                          } ${
                            selectedLocationData ? "bg-white" : "bg-gray-50"
                          }`}
                          onClick={() =>
                            setIsLocationDropdownOpen(!isLocationDropdownOpen)
                          }
                        >
                          {selectedLocationData ? (
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {selectedLocationData.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Pengambilan:{" "}
                                  {selectedLocationData.distribution}
                                </div>
                              </div>
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500">
                                Pilih wilayah Jakarta
                              </span>
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        {/* Dropdown */}
                        {isLocationDropdownOpen && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-hidden">
                            {/* Search Input */}
                            <div className="p-3 border-b border-gray-200">
                              <div className="relative">
                                <input
                                  type="text"
                                  placeholder="Cari wilayah..."
                                  value={locationSearchTerm}
                                  onChange={(e) =>
                                    setLocationSearchTerm(e.target.value)
                                  }
                                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            {/* Location List */}
                            <div className="max-h-60 overflow-y-auto">
                              {filteredLocations.length > 0 ? (
                                filteredLocations.map((location) => (
                                  <div
                                    key={location.id}
                                    className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                    onClick={() =>
                                      handleLocationSelect(location)
                                    }
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <div className="font-medium text-gray-900">
                                          {location.name}
                                        </div>
                                        <div className="text-sm text-gray-500 mb-1">
                                          Pengambilan: {location.distribution}
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                          {location.areas
                                            .slice(0, 4)
                                            .map((area, index) => (
                                              <span
                                                key={index}
                                                className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                                              >
                                                {area}
                                              </span>
                                            ))}
                                          {location.areas.length > 4 && (
                                            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                              +{location.areas.length - 4}{" "}
                                              lainnya
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="p-4 text-center text-gray-500">
                                  <svg
                                    className="w-8 h-8 mx-auto mb-2 text-gray-400"
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
                                  Wilayah tidak ditemukan
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {errors.selectedLocation && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.selectedLocation}
                        </p>
                      )}
                      {/* Selected Location Info */}
                      {selectedLocationData && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-start space-x-3">
                            <svg
                              className="w-5 h-5 text-green-600 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <div>
                              <h4 className="font-medium text-green-800">
                                Informasi Pengambilan:
                              </h4>
                              <p className="text-sm text-green-700 mt-1">
                                Lokasi: {selectedLocationData.distribution}
                              </p>
                              <p className="text-sm text-green-700">
                                Kontak: {selectedLocationData.contact}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Applicant Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Informasi Pemohon
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Pemohon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="applicantName"
                        value={formData.applicantName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.applicantName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Nama lengkap atau nama organisasi"
                      />
                      {errors.applicantName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.applicantName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Pemohon <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="applicantType"
                        value={formData.applicantType}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.applicantType
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Pilih jenis pemohon</option>
                        {applicantTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.applicantType && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.applicantType}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Penanggung Jawab <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.contactPerson
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Nama penanggung jawab"
                      />
                      {errors.contactPerson && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.contactPerson}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="email@contoh.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="08xxxxxxxxxx"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.address ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Alamat lengkap pemohon"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Seedling Selection Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    Pilih Jenis Bibit
                  </h3>
                  <div className="space-y-6">
                    {seedlingCategories.map((category) => (
                      <div
                        key={category.category}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-gray-800 mb-3">
                          {category.category}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {category.types.map((type) => (
                            <div
                              key={type.name}
                              className="bg-white rounded-lg p-3 border border-gray-200"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-gray-700">
                                  {type.name}
                                </span>
                                <span className="text-xs text-gray-500">
                                  Max: {type.maxQty}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleSeedlingTypeChange(
                                      category.category,
                                      type,
                                      Math.max(
                                        0,
                                        getSeedlingQuantity(
                                          category.category,
                                          type.name
                                        ) - 1
                                      )
                                    )
                                  }
                                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                                >
                                  <svg
                                    className="w-4 h-4"
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
                                <input
                                  type="number"
                                  min="0"
                                  max={type.maxQty}
                                  value={getSeedlingQuantity(
                                    category.category,
                                    type.name
                                  )}
                                  onChange={(e) =>
                                    handleSeedlingTypeChange(
                                      category.category,
                                      type,
                                      Number.parseInt(e.target.value) || 0
                                    )
                                  }
                                  className="w-16 text-center border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleSeedlingTypeChange(
                                      category.category,
                                      type,
                                      Math.min(
                                        type.maxQty,
                                        getSeedlingQuantity(
                                          category.category,
                                          type.name
                                        ) + 1
                                      )
                                    )
                                  }
                                  className="w-8 h-8 rounded-full bg-green-200 hover:bg-green-300 flex items-center justify-center"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {errors.seedlingTypes && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.seedlingTypes}
                      </p>
                    )}
                    {/* Total Summary */}
                    {formData.seedlingTypes.length > 0 && (
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">
                          Ringkasan Permohonan:
                        </h4>
                        <div className="space-y-1 text-sm">
                          {formData.seedlingTypes.map((item, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="text-green-700">
                                {item.type} ({item.category})
                              </span>
                              <span className="font-medium text-green-800">
                                {item.quantity} bibit
                              </span>
                            </div>
                          ))}
                          <div className="border-t border-green-200 pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                              <span className="text-green-800">Total:</span>
                              <span className="text-green-800">
                                {formData.totalQuantity} bibit
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Planting Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
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
                    Informasi Penanaman
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lokasi Penanaman <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="plantingLocation"
                        value={formData.plantingLocation}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.plantingLocation
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Contoh: Taman RT 05/RW 02, Jl. Mawar No. 123"
                      />
                      {errors.plantingLocation && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.plantingLocation}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tujuan Penanaman <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="plantingPurpose"
                        value={formData.plantingPurpose}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.plantingPurpose
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Pilih tujuan penanaman</option>
                        {plantingPurposes.map((purpose) => (
                          <option key={purpose} value={purpose}>
                            {purpose}
                          </option>
                        ))}
                      </select>
                      {errors.plantingPurpose && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.plantingPurpose}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Penanaman{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="plantingDate"
                        value={formData.plantingDate}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.plantingDate
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.plantingDate && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.plantingDate}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Luas Lahan
                      </label>
                      <input
                        type="text"
                        name="landArea"
                        value={formData.landArea}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Contoh: 100 m² (opsional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Tanah
                      </label>
                      <select
                        name="soilType"
                        value={formData.soilType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Pilih jenis tanah (opsional)</option>
                        {soilTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sumber Air
                      </label>
                      <select
                        name="waterSource"
                        value={formData.waterSource}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Pilih sumber air (opsional)</option>
                        {waterSources.map((source) => (
                          <option key={source} value={source}>
                            {source}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Komitmen Perawatan{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="careCommitment"
                        value={formData.careCommitment}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.careCommitment
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Pilih komitmen perawatan</option>
                        <option value="Siap merawat sendiri">
                          Siap merawat sendiri
                        </option>
                        <option value="Perawatan bersama komunitas">
                          Perawatan bersama komunitas
                        </option>
                        <option value="Koordinasi dengan RT/RW">
                          Koordinasi dengan RT/RW
                        </option>
                        <option value="Bantuan perawatan dari dinas">
                          Bantuan perawatan dari dinas
                        </option>
                      </select>
                      {errors.careCommitment && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.careCommitment}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Deskripsi Rencana Penanaman{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.description
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Jelaskan rencana penanaman, tata letak, dan tujuan jangka panjang..."
                      />
                      {errors.description && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Informasi Tambahan
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kebutuhan Khusus
                      </label>
                      <textarea
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Contoh: Bantuan transportasi, pelatihan perawatan, dll. (Kosongkan jika tidak ada)"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <div className="text-sm">
                      <label className="font-medium text-gray-700">
                        Saya menyetujui syarat dan ketentuan{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <p className="text-gray-600 mt-1">
                        Dengan mencentang kotak ini, saya menyatakan bahwa
                        informasi yang diberikan adalah benar dan saya
                        berkomitmen untuk merawat bibit tanaman yang diberikan
                        dengan baik. Saya memahami bahwa bibit ini diberikan
                        gratis untuk tujuan penghijauan dan konservasi
                        lingkungan.
                      </p>
                      {errors.agreeTerms && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.agreeTerms}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => onNavigate("landing")}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      "Kirim Permohonan"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      <ConfirmationModal />

      {/* Success Modal */}
      <SuccessModal />
    </div>
  );
};

export default SeedlingApplicationPage;
