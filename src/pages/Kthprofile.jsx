"use client";
import { useState } from "react";

const KTHProfilePage = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState("cover");

  // Data daftar isi berdasarkan gambar
  const tableOfContents = [
    { id: "01", title: "Pendahuluan", section: "introduction" },
    { id: "02", title: "Definisi", section: "definition" },
    {
      id: "03",
      title: "Komoditas Hasil Kelompok Tani Hutan",
      section: "commodities",
    },
    {
      id: "04",
      title: "Peta Sebaran Kelompok Tani Hutan di DKI Jakarta",
      section: "distribution-map",
    },
    {
      id: "05",
      title: "Profil KTH Srengseng Hijau Lestari",
      section: "srengseng",
    },
    { id: "06", title: "Profil KTH Isbee Farm", section: "isbee-farm" },
    { id: "07", title: "Profil KTH Flora Mangrove", section: "flora-mangrove" },
    { id: "08", title: "Profil KTH Sikumis Hutan Kota", section: "sikumis" },
    { id: "09", title: "Profil KTH Ketapang", section: "ketapang" },
    {
      id: "10",
      title: "Profil KTH Rumah Kaum Jayakarta",
      section: "rumah-kaum",
    },
    {
      id: "11",
      title: "Profil KTH Berkah Telaga Indah",
      section: "berkah-telaga",
    },
    {
      id: "12",
      title: "Profil KTH Cilangkap Subur Lestari",
      section: "cilangkap",
    },
    { id: "13", title: "Profil KTH Munjul Sinambung", section: "munjul" },
    {
      id: "14",
      title: "Profil KTH Wana Makmur Persada",
      section: "wana-makmur",
    },
    { id: "15", title: "Profil KTH Kramat Aris", section: "kramat-aris" },
    {
      id: "16",
      title: "Profil KTH Masyarakat Peduli Lingkungan Kali Krukut",
      section: "kali-krukut",
    },
    { id: "17", title: "Profil KTH Pinang Asri", section: "pinang-asri" },
    {
      id: "18",
      title: "Profil KTH KSB Lenteng Agung",
      section: "lenteng-agung",
    },
    {
      id: "19",
      title: "Profil KTH Karya Mandiri Bersama",
      section: "karya-mandiri",
    },
    { id: "20", title: "Profil KTH Kumbang", section: "kumbang" },
    { id: "21", title: "Profil KTH Kalijati", section: "kalijati" },
    { id: "22", title: "Profil KTH Laskaru", section: "laskaru" },
    { id: "23", title: "Profil KTH Gintung", section: "gintung" },
  ];

  // Komponen Halaman Sampul (Cover)
  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-green-800 relative overflow-hidden flex items-center justify-center">
      {/* Elemen Dekoratif */}
      {/* ... kode elemen dekoratif tidak diubah ... */}

      {/* Konten Utama */}
      <div className="text-center text-white z-10 px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Profil Kelompok
          <br />
          Tani Hutan Jakarta
          <br />
          <span className="text-5xl md:text-7xl">2024</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mt-8 opacity-90">
          Dinas Pertamanan dan Hutan Kota
          <br />
          Provinsi DKI Jakarta
        </p>
        <button
          onClick={() => setActiveSection("table-of-contents")}
          className="mt-12 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Lihat Profil KTH
        </button>
      </div>
    </div>
  );

  // Komponen Daftar Isi
  const TableOfContents = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-green-800 relative">
      {/* ... kode elemen dekoratif tidak diubah ... */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Profil KTH
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <div className="grid gap-3">
              {tableOfContents.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => setActiveSection(item.section)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-bold text-lg w-8">
                      {item.id}
                    </span>
                    <span className="text-white font-medium text-lg group-hover:text-orange-200 transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-white/60 font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setActiveSection("cover")}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 mr-4"
            >
              Kembali ke Cover
            </button>
            <button
              onClick={() => setActiveSection("introduction")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Mulai Membaca
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Contoh Komponen Konten (Pendahuluan)
  const IntroductionSection = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Pendahuluan</h1>
              <span className="text-green-600 font-bold text-xl">02</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Kelompok Tani Hutan (KTH) merupakan kumpulan petani hutan yang
                tergabung dalam suatu kelompok yang mengelola hutan dan lahan
                untuk kegiatan kehutanan. Di DKI Jakarta, KTH berperan penting
                dalam menjaga kelestarian ruang terbuka hijau dan meningkatkan
                kesejahteraan masyarakat.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta telah
                membina berbagai KTH yang tersebar di seluruh wilayah Jakarta.
                Setiap KTH memiliki karakteristik dan keunggulan masing-masing
                dalam mengembangkan komoditas hasil hutan dan pertanian urban.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Tujuan Profil KTH
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Memberikan informasi lengkap tentang KTH di DKI Jakarta
                  </li>
                  <li>
                    Memperkenalkan komoditas dan produk unggulan setiap KTH
                  </li>
                  <li>
                    Mendukung pengembangan ekonomi kreatif berbasis kehutanan
                  </li>
                  <li>
                    Meningkatkan kesadaran masyarakat tentang pentingnya hutan
                    kota
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActiveSection("table-of-contents")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                ← Daftar Isi
              </button>
              <button
                onClick={() => setActiveSection("definition")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Definisi →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render berdasarkan section yang aktif
  const renderContent = () => {
    switch (activeSection) {
      case "cover":
        return <CoverPage />;
      case "table-of-contents":
        return <TableOfContents />;
      case "introduction":
        return <IntroductionSection />;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Halaman dalam pengembangan
              </h2>
              <p className="text-gray-600 mb-6">
                Konten untuk "{activeSection}" sedang dalam proses pengembangan.
              </p>
              <button
                onClick={() => setActiveSection("table-of-contents")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Kembali ke Daftar Isi
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{renderContent()}</main>
    </div>
  );
};

export default KTHProfilePage;
