import { useState } from "react";

const RTHInfoPage = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const articlesPerPage = 10;

  // Data artikel RTH dummy yang realistis
  const rthArticles = [
    {
      id: 1,
      title: "Pentingnya Ruang Terbuka Hijau untuk Kualitas Udara Jakarta",
      date: "2024-12-20",
      excerpt:
        "Ruang Terbuka Hijau (RTH) memiliki peran vital dalam meningkatkan kualitas udara di perkotaan, terutama di Jakarta yang padat penduduk.",
      category: "Lingkungan",
      author: "Tim RTH Jakarta",
    },
    {
      id: 2,
      title: "Strategi Pengembangan RTH di Wilayah Padat Penduduk",
      date: "2024-12-18",
      excerpt:
        "Implementasi strategi inovatif untuk mengoptimalkan ruang terbuka hijau di area dengan kepadatan tinggi di DKI Jakarta.",
      category: "Perencanaan",
      author: "Dinas Pertamanan",
    },
    {
      id: 3,
      title: "Manfaat Ekonomi dari Investasi Ruang Terbuka Hijau",
      date: "2024-12-15",
      excerpt:
        "Analisis dampak ekonomi positif dari pengembangan RTH terhadap nilai properti dan kesehatan masyarakat.",
      category: "Ekonomi",
      author: "Tim Peneliti RTH",
    },
    {
      id: 4,
      title: "Teknologi Smart City dalam Pengelolaan RTH Jakarta",
      date: "2024-12-12",
      excerpt:
        "Penerapan teknologi Internet of Things (IoT) dan sensor untuk monitoring kualitas dan pemeliharaan ruang terbuka hijau.",
      category: "Teknologi",
      author: "Tim Innovation Lab",
    },
    {
      id: 5,
      title: "Partisipasi Masyarakat dalam Pemeliharaan RTH Komunitas",
      date: "2024-12-10",
      excerpt:
        "Program pemberdayaan masyarakat untuk turut serta dalam perawatan dan pengembangan taman lingkungan sekitar.",
      category: "Komunitas",
      author: "Tim Engagement",
    },
    {
      id: 6,
      title: "Biodiversitas Flora dalam Ekosistem RTH Urban",
      date: "2024-12-08",
      excerpt:
        "Studi komprehensif tentang keanekaragaman hayati tanaman di ruang terbuka hijau Jakarta dan upaya konservasinya.",
      category: "Biodiversitas",
      author: "Tim Konservasi",
    },
    {
      id: 7,
      title: "Desain Berkelanjutan untuk RTH Masa Depan",
      date: "2024-12-05",
      excerpt:
        "Konsep desain landscape yang sustainable dan adaptif terhadap perubahan iklim untuk RTH generasi mendatang.",
      category: "Desain",
      author: "Tim Landscape",
    },
    {
      id: 8,
      title: "Evaluasi Dampak RTH terhadap Iklim Mikro Jakarta",
      date: "2024-12-03",
      excerpt:
        "Penelitian ilmiah tentang pengaruh ruang terbuka hijau dalam menurunkan suhu dan meningkatkan kelembaban udara.",
      category: "Iklim",
      author: "Tim Klimatologi",
    },
    {
      id: 9,
      title: "Integrasi RTH dengan Sistem Transportasi Publik",
      date: "2024-12-01",
      excerpt:
        "Perencanaan terintegrasi antara ruang terbuka hijau dengan fasilitas transportasi umum untuk mobilitas berkelanjutan.",
      category: "Transportasi",
      author: "Tim Urban Planning",
    },
    {
      id: 10,
      title: "Monitoring Kualitas Air di RTH dengan Fitur Water Bodies",
      date: "2024-11-28",
      excerpt:
        "Sistem pemantauan kualitas air di danau dan kolam yang ada dalam area ruang terbuka hijau Jakarta.",
      category: "Lingkungan",
      author: "Tim Hidrologi",
    },
    {
      id: 11,
      title: "RTH sebagai Mitigasi Bencana Banjir di Jakarta",
      date: "2024-11-25",
      excerpt:
        "Peran strategis ruang terbuka hijau dalam sistem drainase alami dan pencegahan banjir di wilayah perkotaan.",
      category: "Mitigasi Bencana",
      author: "Tim DRR",
    },
    {
      id: 12,
      title: "Pengembangan RTH Vertikal di Gedung-gedung Tinggi",
      date: "2024-11-22",
      excerpt:
        "Inovasi green building dengan konsep vertical garden dan rooftop garden sebagai bagian dari RTH urban.",
      category: "Inovasi",
      author: "Tim Green Building",
    },
    {
      id: 13,
      title: "Edukasi Lingkungan melalui Program RTH Edukatif",
      date: "2024-11-20",
      excerpt:
        "Pemanfaatan ruang terbuka hijau sebagai laboratorium alam untuk pendidikan lingkungan bagi generasi muda.",
      category: "Edukasi",
      author: "Tim Edukasi",
    },
    {
      id: 14,
      title: "Kolaborasi Publik-Swasta dalam Pengembangan RTH",
      date: "2024-11-18",
      excerpt:
        "Model kemitraan antara pemerintah dan sektor swasta untuk mempercepat pembangunan ruang terbuka hijau.",
      category: "Kemitraan",
      author: "Tim Partnership",
    },
    {
      id: 15,
      title: "Analisis Cost-Benefit RTH untuk Pembangunan Berkelanjutan",
      date: "2024-11-15",
      excerpt:
        "Kajian ekonomi komprehensif tentang investasi RTH dan return on investment untuk pembangunan kota berkelanjutan.",
      category: "Ekonomi",
      author: "Tim Economic Analysis",
    },
  ];

  // Filter artikel berdasarkan pencarian
  const filteredArticles = rthArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Lingkungan: "bg-green-100 text-green-800",
      Perencanaan: "bg-blue-100 text-blue-800",
      Ekonomi: "bg-yellow-100 text-yellow-800",
      Teknologi: "bg-purple-100 text-purple-800",
      Komunitas: "bg-pink-100 text-pink-800",
      Biodiversitas: "bg-emerald-100 text-emerald-800",
      Desain: "bg-indigo-100 text-indigo-800",
      Iklim: "bg-orange-100 text-orange-800",
      Transportasi: "bg-red-100 text-red-800",
      "Mitigasi Bencana": "bg-gray-100 text-gray-800",
      Inovasi: "bg-cyan-100 text-cyan-800",
      Edukasi: "bg-teal-100 text-teal-800",
      Kemitraan: "bg-lime-100 text-lime-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="rthGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="3"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path
                  d="M2,18 Q10,12 18,18"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#rthGrid)" />
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-15 animate-float">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </div>

        <div
          className="absolute bottom-10 right-10 opacity-12 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M16.5,11A1.5,1.5 0 0,1 15,12.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 15,9.5A1.5,1.5 0 0,1 16.5,11M10.5,11A1.5,1.5 0 0,1 9,12.5A1.5,1.5 0 0,1 7.5,11A1.5,1.5 0 0,1 9,9.5A1.5,1.5 0 0,1 10.5,11M12,17C13.75,17 15.29,16.12 16.19,14.73L17.75,15.38C16.53,17.32 14.37,18.5 12,18.5C9.63,18.5 7.47,17.32 6.25,15.38L7.81,14.73C8.71,16.12 10.25,17 12,17Z" />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Informasi RTH
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Ruang Terbuka Hijau untuk Jakarta yang Berkelanjutan dan Ramah
              Lingkungan
            </p>

            {/* RTH stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Artikel RTH</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm opacity-90">Kategori</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-sm opacity-90">Target RTH Jakarta</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="rgb(249,250,251)"
              opacity="0.8"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button
                onClick={() => onNavigate("LandingPage")}
                className="text-gray-500 hover:text-green-600 transition-colors"
              >
                Beranda
              </button>
            </li>
            <svg
              className="w-4 h-4 text-gray-400 mx-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <li className="inline-flex items-center">
              <span className="text-gray-800 font-medium">Informasi RTH</span>
            </li>
          </ol>
        </nav>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-lg">
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
              placeholder="Cari artikel RTH..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Informasi Ruang Terbuka Hijau
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ruang Terbuka Hijau (RTH) merupakan area memanjang/jalur dan atau
            mengelompok, yang penggunaannya lebih bersifat terbuka, tempat
            tumbuh tanaman, baik yang tumbuh secara alamiah maupun yang sengaja
            ditanam. RTH di perkotaan terdiri dari RTH publik dan RTH privat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">30%</div>
              <div className="text-sm text-green-700">Target RTH Kota</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">20%</div>
              <div className="text-sm text-blue-700">RTH Publik</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">10%</div>
              <div className="text-sm text-purple-700">RTH Privat</div>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              Artikel & Informasi RTH ({filteredArticles.length})
            </h3>
          </div>

          {currentArticles.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {currentArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => onNavigate(`rth-detail-${article.id}`)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}
                        >
                          {article.category}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">
                          {formatDate(article.date)}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">
                          {article.author}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian Anda.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Sebelumnya
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-2 text-sm rounded-md ${
                  currentPage === index + 1
                    ? "bg-green-600 text-white"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Selanjutnya →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RTHInfoPage;
