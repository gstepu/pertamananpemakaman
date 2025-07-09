import { useState } from "react";

const RegulationPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Data regulasi berdasarkan kategori
  const regulations = [
    {
      id: 1,
      title: "Undang-Undang Republik Indonesia Nomor 23 Tahun 2014",
      subtitle: "Tentang Pemerintahan Daerah",
      description:
        "Undang-undang yang mengatur mengenai pembagian urusan pemerintahan antara pemerintah pusat, pemerintahan daerah provinsi, dan pemerintahan daerah kabupaten/kota, termasuk urusan di bidang pertamanan dan kehutanan.",
      category: "uu",
      year: "2014",
      number: "UU No. 23 Tahun 2014",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Undang-undang ini menjadi dasar kewenangan pemerintah daerah dalam mengelola urusan pertamanan dan hutan kota sebagai urusan wajib yang berkaitan dengan pelayanan dasar.",
    },
    {
      id: 2,
      title: "Undang-Undang Republik Indonesia Nomor 41 Tahun 1999",
      subtitle: "Tentang Kehutanan",
      description:
        "Undang-undang yang mengatur penyelenggaraan kehutanan yang bertujuan untuk sebesar-besar kemakmuran rakyat yang berkeadilan dan berkelanjutan, termasuk hutan kota.",
      category: "uu",
      year: "1999",
      number: "UU No. 41 Tahun 1999",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Memberikan landasan hukum pengelolaan hutan kota sebagai bagian dari kawasan hutan yang berada di wilayah perkotaan.",
    },
    {
      id: 3,
      title: "Peraturan Pemerintah Republik Indonesia Nomor 63 Tahun 2002",
      subtitle: "Tentang Hutan Kota",
      description:
        "Peraturan yang mengatur tentang perencanaan, pemanfaatan, penyelenggaraan, dan pengendalian hutan kota untuk meningkatkan kualitas lingkungan hidup.",
      category: "pp",
      year: "2002",
      number: "PP No. 63 Tahun 2002",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Mengatur secara teknis mengenai kriteria, perencanaan, dan pengelolaan hutan kota termasuk mekanisme perizinan dan pengawasan.",
    },
    {
      id: 4,
      title: "Peraturan Menteri Dalam Negeri Nomor 1 Tahun 2007",
      subtitle: "Tentang Penataan Ruang Terbuka Hijau Kawasan Perkotaan",
      description:
        "Peraturan yang mengatur penataan ruang terbuka hijau di kawasan perkotaan sebagai bagian dari sistem ruang kota yang berkelanjutan.",
      category: "permen",
      year: "2007",
      number: "Permendagri No. 1 Tahun 2007",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Menetapkan standar minimal 30% ruang terbuka hijau dari luas wilayah kota dan mengatur mekanisme perencanaan serta pengelolaannya.",
    },
    {
      id: 5,
      title: "Peraturan Daerah Provinsi DKI Jakarta Nomor 6 Tahun 1999",
      subtitle: "Tentang Rencana Tata Ruang Wilayah DKI Jakarta 2030",
      description:
        "Peraturan daerah yang mengatur rencana tata ruang wilayah DKI Jakarta hingga tahun 2030, termasuk alokasi ruang untuk pertamanan dan hutan kota.",
      category: "perda",
      year: "1999",
      number: "Perda DKI No. 6 Tahun 1999",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Mengalokasikan ruang terbuka hijau minimal 13,94% dari total luas wilayah DKI Jakarta dan mengatur sebaran serta fungsinya.",
    },
    {
      id: 6,
      title: "Peraturan Daerah Provinsi DKI Jakarta Nomor 8 Tahun 2007",
      subtitle: "Tentang Ketertiban Umum",
      description:
        "Peraturan yang mengatur ketertiban umum di DKI Jakarta, termasuk larangan merusak fasilitas taman dan ruang terbuka hijau.",
      category: "perda",
      year: "2007",
      number: "Perda DKI No. 8 Tahun 2007",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Mengatur sanksi terhadap perusakan fasilitas taman, pembuangan sampah sembarangan, dan vandalisme di area ruang terbuka hijau.",
    },
    {
      id: 7,
      title: "Peraturan Gubernur DKI Jakarta Nomor 38 Tahun 2012",
      subtitle: "Tentang Bangunan Gedung Hijau",
      description:
        "Peraturan yang mengatur kewajiban penyediaan ruang terbuka hijau pada bangunan gedung di DKI Jakarta.",
      category: "pergub",
      year: "2012",
      number: "Pergub DKI No. 38 Tahun 2012",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Mewajibkan setiap bangunan gedung menyediakan ruang terbuka hijau minimal 10% dari luas lahan dan mengatur kriteria tanaman yang digunakan.",
    },
    {
      id: 8,
      title: "Peraturan Gubernur DKI Jakarta Nomor 155 Tahun 2019",
      subtitle: "Tentang Retribusi Izin Pemakaman dan Pengurusan Jenazah",
      description:
        "Peraturan yang mengatur tarif retribusi untuk izin pemakaman dan pengurusan jenazah di tempat pemakaman umum yang dikelola Pemerintah Provinsi DKI Jakarta.",
      category: "pergub",
      year: "2019",
      number: "Pergub DKI No. 155 Tahun 2019",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Menetapkan besaran retribusi pemakaman berdasarkan lokasi, jenis layanan, dan klasifikasi pemakaman serta prosedur pembayarannya.",
    },
    {
      id: 9,
      title: "Keputusan Gubernur DKI Jakarta Nomor 2090 Tahun 2002",
      subtitle:
        "Tentang Organisasi dan Tata Kerja Dinas Pertamanan dan Pemakaman",
      description:
        "Keputusan yang mengatur struktur organisasi, tugas, dan fungsi Dinas Pertamanan dan Pemakaman DKI Jakarta.",
      category: "kepgub",
      year: "2002",
      number: "Kepgub DKI No. 2090 Tahun 2002",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Menetapkan struktur organisasi dinas, pembagian tugas dan fungsi setiap unit kerja, serta mekanisme koordinasi internal.",
    },
    {
      id: 10,
      title: "Instruksi Gubernur DKI Jakarta Nomor 66 Tahun 2020",
      subtitle:
        "Tentang Penerapan Protokol Kesehatan dalam Pengelolaan Taman dan Hutan Kota",
      description:
        "Instruksi untuk menerapkan protokol kesehatan dalam pengelolaan dan pemanfaatan taman serta hutan kota selama masa pandemi.",
      category: "insgub",
      year: "2020",
      number: "Insgub DKI No. 66 Tahun 2020",
      status: "Berlaku",
      downloadUrl: "#",
      summary:
        "Mengatur pembatasan kapasitas pengunjung, kewajiban penggunaan masker, dan penyediaan fasilitas cuci tangan di area taman.",
    },
  ];

  const categories = [
    { id: "all", name: "Semua Regulasi", count: regulations.length },
    {
      id: "uu",
      name: "Undang-Undang",
      count: regulations.filter((r) => r.category === "uu").length,
    },
    {
      id: "pp",
      name: "Peraturan Pemerintah",
      count: regulations.filter((r) => r.category === "pp").length,
    },
    {
      id: "permen",
      name: "Peraturan Menteri",
      count: regulations.filter((r) => r.category === "permen").length,
    },
    {
      id: "perda",
      name: "Peraturan Daerah",
      count: regulations.filter((r) => r.category === "perda").length,
    },
    {
      id: "pergub",
      name: "Peraturan Gubernur",
      count: regulations.filter((r) => r.category === "pergub").length,
    },
    {
      id: "kepgub",
      name: "Keputusan Gubernur",
      count: regulations.filter((r) => r.category === "kepgub").length,
    },
    {
      id: "insgub",
      name: "Instruksi Gubernur",
      count: regulations.filter((r) => r.category === "insgub").length,
    },
  ];

  // Filter regulasi berdasarkan kategori dan pencarian
  const filteredRegulations = regulations.filter((regulation) => {
    const matchesCategory =
      selectedCategory === "all" || regulation.category === selectedCategory;
    const matchesSearch =
      regulation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      regulation.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      regulation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      regulation.number.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      uu: "⚖️",
      pp: "📋",
      permen: "📄",
      perda: "🏛️",
      pergub: "📜",
      kepgub: "✅",
      insgub: "📢",
    };
    return icons[category] || "📄";
  };

  const getCategoryColor = (category) => {
    const colors = {
      uu: "bg-red-100 text-red-800",
      pp: "bg-blue-100 text-blue-800",
      permen: "bg-green-100 text-green-800",
      perda: "bg-purple-100 text-purple-800",
      pergub: "bg-yellow-100 text-yellow-800",
      kepgub: "bg-indigo-100 text-indigo-800",
      insgub: "bg-pink-100 text-pink-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Regulasi & Dasar Hukum
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Kumpulan peraturan perundang-undangan yang menjadi dasar hukum
              penyelenggaraan urusan pertamanan dan hutan kota di DKI Jakarta
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
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
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="Cari regulasi berdasarkan judul, nomor, atau deskripsi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200"
                }`}
              >
                {category.name}
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dasar Hukum Dinas Pertamanan dan Hutan Kota DKI Jakarta
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Dinas Pertamanan dan Hutan Kota DKI Jakarta dalam menjalankan
              tugas dan fungsinya berpedoman pada berbagai peraturan
              perundang-undangan dari tingkat pusat hingga daerah.
              Regulasi-regulasi ini memberikan landasan hukum yang kuat untuk:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span>Pengelolaan ruang terbuka hijau dan hutan kota</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span>Penyelenggaraan pemakaman dan pengurusan jenazah</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span>Pemeliharaan dan pengembangan taman kota</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span>Penataan lansekap dan estetika kota</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span>Penegakan ketertiban di area pertamanan</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span>Pelayanan publik bidang pertamanan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulations List */}
        {filteredRegulations.length > 0 ? (
          <div className="space-y-6">
            {filteredRegulations.map((regulation) => (
              <article
                key={regulation.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">
                          {getCategoryIcon(regulation.category)}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(regulation.category)}`}
                        >
                          {
                            categories.find(
                              (cat) => cat.id === regulation.category,
                            )?.name
                          }
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          {regulation.year}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            regulation.status === "Berlaku"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {regulation.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {regulation.title}
                      </h3>

                      <p className="text-lg text-green-700 font-medium mb-3">
                        {regulation.subtitle}
                      </p>

                      <p className="text-gray-600 mb-4 line-height-relaxed">
                        {regulation.description}
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                        <p className="text-sm text-green-800">
                          <strong>Ringkasan:</strong> {regulation.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3 lg:min-w-[200px]">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {regulation.number}
                        </p>
                        <p className="text-xs text-gray-500">
                          Tahun {regulation.year}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
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
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download
                        </button>
                        <button className="border border-gray-300 hover:border-green-500 hover:text-green-600 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada regulasi ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau pilih kategori yang berbeda.
              </p>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Butuh Bantuan Terkait Regulasi?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Tim legal kami siap membantu Anda memahami dan menerapkan regulasi
              yang berkaitan dengan urusan pertamanan dan hutan kota
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate("contact")}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors">
                Download Kompilasi Regulasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationPage;
