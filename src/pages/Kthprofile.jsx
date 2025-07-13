"use client";

import { useState } from "react";

// New Component: A stylish, reusable confirmation modal
// Komponen ini disalin dari CatalogPage untuk digunakan kembali di sini.
const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-6 m-4 w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat bagian dalamnya diklik
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{children}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Ya, Unduh
          </button>
        </div>
      </div>
    </div>
  );
};

const KTHProfilePage = ({ onNavigate }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // MODIFIKASI: State untuk modal

  // KTH profiles data... (omitted for brevity, no changes here)
  const kthProfiles = [
    {
      id: "komoditas",
      title: "Komoditas Hasil Kelompok Tani Hutan",
      content: {
        description:
          "Berbagai komoditas yang dihasilkan oleh Kelompok Tani Hutan di DKI Jakarta meliputi tanaman hias, tanaman obat, sayuran organik, dan produk olahan hasil hutan.",
        items: [
          "Tanaman Hias (Anggrek, Adenium, Kaktus)",
          "Tanaman Obat (Jahe, Kunyit, Temulawak)",
          "Sayuran Organik (Kangkung, Bayam, Selada)",
          "Produk Olahan (Kompos, Pupuk Organik, Bibit)",
        ],
      },
    },
    {
      id: "peta-sebaran",
      title: "Peta Sebaran Kelompok Tani Hutan di DKI Jakarta",
      content: {
        description:
          "Distribusi KTH tersebar di seluruh wilayah DKI Jakarta dengan konsentrasi terbesar di Jakarta Timur dan Jakarta Selatan.",
        areas: [
          { area: "Jakarta Pusat", count: "3 KTH" },
          { area: "Jakarta Utara", count: "4 KTH" },
          { area: "Jakarta Barat", count: "5 KTH" },
          { area: "Jakarta Selatan", count: "7 KTH" },
          { area: "Jakarta Timur", count: "8 KTH" },
        ],
      },
    },
    {
      id: "srengseng",
      title: "Profil KTH Srengseng Hijau Lestari",
      content: {
        description:
          "KTH Srengseng Hijau Lestari berlokasi di Hutan Kota Srengseng, Jakarta Barat. Fokus pada budidaya tanaman hias dan tanaman obat.",
        details: {
          lokasi: "Hutan Kota Srengseng, Jakarta Barat",
          tahunBerdiri: "2018",
          anggota: "25 orang",
          komoditas: "Tanaman hias, tanaman obat, kompos",
        },
      },
    },
    {
      id: "isbee-farm",
      title: "Profil KTH Isbee Farm",
      content: {
        description:
          "KTH Isbee Farm mengkhususkan diri dalam budidaya sayuran organik dan pengolahan pupuk organik.",
        details: {
          lokasi: "Jakarta Selatan",
          tahunBerdiri: "2019",
          anggota: "18 orang",
          komoditas: "Sayuran organik, pupuk organik, bibit sayuran",
        },
      },
    },
    {
      id: "flora-mangrove",
      title: "Profil KTH Flora Mangrove",
      content: {
        description:
          "KTH Flora Mangrove berfokus pada konservasi dan budidaya tanaman mangrove serta ekowisata.",
        details: {
          lokasi: "Jakarta Utara",
          tahunBerdiri: "2017",
          anggota: "30 orang",
          komoditas: "Bibit mangrove, produk olahan mangrove, ekowisata",
        },
      },
    },
    {
      id: "sikumis",
      title: "Profil KTH Sikumis Hutan Kota",
      content: {
        description:
          "KTH Sikumis mengembangkan budidaya tanaman sayuran dan tanaman hias dalam sistem vertikultur.",
        details: {
          lokasi: "Jakarta Timur",
          tahunBerdiri: "2020",
          anggota: "22 orang",
          komoditas: "Sayuran hidroponik, tanaman hias, sistem vertikultur",
        },
      },
    },
  ];

  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    // 1. Path diubah ke file profilkth.pdf
    link.href = "/files/profilkth.pdf";
    // 2. Nama file unduhan diubah menjadi profilkth.pdf
    link.download = "profilkth.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Profil Kelompok Tani Hutan Jakarta
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Kelompok Tani Hutan (KTH) merupakan kumpulan petani hutan yang
            tergabung dalam suatu kelompok yang mengelola hutan dan lahan untuk
            kegiatan kehutanan. Di DKI Jakarta, KTH berperan penting dalam
            menjaga kelestarian ruang terbuka hijau dan meningkatkan
            kesejahteraan masyarakat.
          </p>

          {/* Tombol baru untuk membuka modal unduhan */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto shadow-md hover:shadow-lg"
          >
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
                d="M12 10v6m0 0l-4-4m4 4l4-4m-6 8h8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
              />
            </svg>
            Download Profil PDF
          </button>
        </div>

        {/* Introduction Content... (no changes) */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tentang Kelompok Tani Hutan
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta telah
                membina berbagai KTH yang tersebar di seluruh wilayah Jakarta.
                Setiap KTH memiliki karakteristik dan keunggulan masing-masing
                dalam mengembangkan komoditas hasil hutan dan pertanian urban.
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Tujuan KTH Jakarta
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Meningkatkan kesejahteraan masyarakat melalui kegiatan
                    kehutanan
                  </li>
                  <li>
                    Menjaga kelestarian ruang terbuka hijau di DKI Jakarta
                  </li>
                  <li>Mengembangkan ekonomi kreatif berbasis kehutanan</li>
                  <li>
                    Meningkatkan kesadaran masyarakat tentang pentingnya hutan
                    kota
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KTH Profiles List... (no changes in structure) */}
        <div className="max-w-4xl mx-auto space-y-4">
          {kthProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleExpand(profile.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">
                      KTH
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {profile.title}
                    </h3>
                    <p className="text-sm text-gray-500">Kelompok Tani Hutan</p>
                  </div>
                </div>
                <div className="text-green-600">
                  {expandedItem === profile.id ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedItem === profile.id && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="text-gray-700 mb-4">
                      {profile.content.description}
                    </p>
                    {/* Content rendering logic remains the same */}
                    {profile.content.items && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Komoditas Utama:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {profile.content.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {profile.content.areas && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Sebaran per Wilayah:
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {profile.content.areas.map((area, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 p-3 rounded-lg"
                            >
                              <div className="font-medium text-gray-800">
                                {area.area}
                              </div>
                              <div className="text-sm text-green-600">
                                {area.count}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {profile.content.details && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Detail KTH:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                          <div>
                            <strong className="text-gray-600">Lokasi: </strong>
                            <span className="text-gray-800">
                              {profile.content.details.lokasi}
                            </span>
                          </div>
                          <div>
                            <strong className="text-gray-600">
                              Tahun Berdiri:{" "}
                            </strong>
                            <span className="text-gray-800">
                              {profile.content.details.tahunBerdiri}
                            </span>
                          </div>
                          <div>
                            <strong className="text-gray-600">Anggota: </strong>
                            <span className="text-gray-800">
                              {profile.content.details.anggota}
                            </span>
                          </div>
                          <div>
                            <strong className="text-gray-600">
                              Komoditas:{" "}
                            </strong>
                            <span className="text-gray-800">
                              {profile.content.details.komoditas}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Render modal konfirmasi unduhan */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDownload}
        title="Konfirmasi Unduhan Profil"
      >
        Apakah Anda yakin ingin mengunduh file "Profil-KTH-Jakarta.pdf"?
      </ConfirmationModal>
    </div>
  );
};

export default KTHProfilePage;
