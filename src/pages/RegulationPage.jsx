import { useState } from "react";

const RegulationPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Statistics data
  const statistics = [
    {
      title: "Undang-Undang",
      count: "15+",
      icon: "⚖️",
      description: "Peraturan tingkat pusat",
      bgColor: "bg-red-500",
      bgGradient: "from-red-500 to-red-600",
      navigationTarget: "regulasi-undang-undang",
    },
    {
      title: "Peraturan Pemerintah",
      count: "20+",
      icon: "📋",
      description: "Peraturan pelaksanaan UU",
      bgColor: "bg-blue-500",
      bgGradient: "from-blue-500 to-blue-600",
      navigationTarget: "regulasi-peraturan-pemerintah",
    },
    {
      title: "Peraturan Daerah",
      count: "10+",
      icon: "🏛️",
      description: "Peraturan tingkat provinsi",
      bgColor: "bg-purple-500",
      bgGradient: "from-purple-500 to-purple-600",
      navigationTarget: "regulasi-peraturan-daerah",
    },
    {
      title: "Peraturan Gubernur",
      count: "5+",
      icon: "📜",
      description: "Peraturan kepala daerah",
      bgColor: "bg-green-500",
      bgGradient: "from-green-500 to-green-600",
      navigationTarget: "regulasi-keputusan-gubernur",
    },
  ];

  // Regulation categories with detailed data
  const regulationCategories = [
    {
      id: "uu",
      title: "Undang-Undang",
      subtitle: "Laws",
      icon: "⚖️",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      accentColor: "text-red-600",
      hoverColor: "hover:border-red-300",
      regulations: [
        {
          number: "UU No. 29 Tahun 2007",
          title: "Jakarta Special Region Government",
          description:
            "Mengatur pemerintahan khusus DKI Jakarta sebagai ibu kota negara",
        },
        {
          number: "UU No. 26 Tahun 2007",
          title: "Spatial Planning",
          description: "Penataan ruang untuk pembangunan berkelanjutan",
        },
        {
          number: "UU No. 41 Tahun 1999",
          title: "Forestry",
          description: "Pengelolaan hutan untuk kemakmuran rakyat",
        },
      ],
    },
    {
      id: "pp",
      title: "Peraturan Pemerintah",
      subtitle: "Government Regulations",
      icon: "📋",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      accentColor: "text-blue-600",
      hoverColor: "hover:border-blue-300",
      regulations: [
        {
          number: "PP No. 9 Tahun 1987",
          title: "Cemetery Land Provision",
          description: "Penyediaan dan penggunaan tanah untuk tempat pemakaman",
        },
        {
          number: "PERPRES No. 65 Tahun 2006",
          title: "Land Acquisition Amendment",
          description:
            "Perubahan atas pengadaan tanah bagi pelaksanaan pembangunan",
        },
        {
          number: "PP No. 63 Tahun 2002",
          title: "Urban Forest",
          description:
            "Hutan kota sebagai bagian infrastruktur hijau perkotaan",
        },
      ],
    },
    {
      id: "perda",
      title: "Peraturan Daerah",
      subtitle: "Local Regulations",
      icon: "🏛️",
      bgGradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      accentColor: "text-purple-600",
      hoverColor: "hover:border-purple-300",
      regulations: [
        {
          number: "PERDA No. 3 Tahun 2007",
          title: "Cemetery Management",
          description: "Pengelolaan tempat pemakaman umum di DKI Jakarta",
        },
        {
          number: "PERDA No. 1 Tahun 2012",
          title: "Spatial Planning 2030",
          description: "Rencana Tata Ruang Wilayah DKI Jakarta 2030",
        },
        {
          number: "PERDA No. 1 Tahun 2014",
          title: "Detailed Spatial Planning",
          description: "Rencana Detail Tata Ruang dan Peraturan Zonasi",
        },
      ],
    },
    {
      id: "pergub",
      title: "Peraturan Gubernur",
      subtitle: "Governor Regulations",
      icon: "📜",
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      accentColor: "text-green-600",
      hoverColor: "hover:border-green-300",
      regulations: [
        {
          number: "PERGUB No. 17 Tahun 2020",
          title: "Department Organization",
          description:
            "Organisasi dan Tata Kerja Dinas Pertamanan dan Hutan Kota",
        },
        {
          number: "PERGUB No. 23 Tahun 2019",
          title: "Green Space Management",
          description: "Pengelolaan Ruang Terbuka Hijau di DKI Jakarta",
        },
        {
          number: "PERGUB No. 38 Tahun 2017",
          title: "Public Cemetery Management",
          description: "Pengelolaan Tempat Pemakaman Umum DKI Jakarta",
        },
      ],
    },
  ];

  const breadcrumbs = [
    { name: "Beranda", action: "LandingPage" },
    { name: "Regulasi", action: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="legalGrid"
                width="25"
                height="25"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="5"
                  y="5"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="2"
                  fill="currentColor"
                  opacity="0.15"
                />
                <path
                  d="M0,12.5 L25,12.5 M12.5,0 L12.5,25"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  opacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#legalGrid)" />
          </svg>
        </div>

        {/* Decorative Legal Elements */}
        <div className="absolute top-10 left-10 opacity-15 animate-float">
          <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A2,2 0 0,1 14,4V7.5L15.5,9L14,10.5V14A2,2 0 0,1 12,16A2,2 0 0,1 10,14V10.5L8.5,9L10,7.5V4A2,2 0 0,1 12,2M12,4V7.5L10.5,9L12,10.5V14L14,10.5L12.5,9L14,7.5V4H12Z" />
          </svg>
        </div>

        <div
          className="absolute bottom-10 right-10 opacity-12 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <svg className="w-36 h-36" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        </div>

        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-10 animate-pulse-glow">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14H7V16H9V14M13,14H11V16H13V14M17,14H15V16H17V14Z" />
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
                  <path d="M12,2A2,2 0 0,1 14,4V7.5L15.5,9L14,10.5V14A2,2 0 0,1 12,16A2,2 0 0,1 10,14V10.5L8.5,9L10,7.5V4A2,2 0 0,1 12,2Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Dasar Hukum & Regulasi
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Kumpulan lengkap peraturan perundang-undangan yang menjadi
              landasan hukum penyelenggaraan urusan pertamanan dan hutan kota
              DKI Jakarta
            </p>

            {/* Legal stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Dokumen Hukum</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm opacity-90">Tingkat Regulasi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">2024</div>
                <div className="text-sm opacity-90">Update Terbaru</div>
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
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="inline-flex items-center">
                {index > 0 && (
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
                )}
                {crumb.action ? (
                  <button
                    onClick={() => onNavigate(crumb.action)}
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    {crumb.name}
                  </button>
                ) : (
                  <span className="text-gray-800 font-medium">
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Statistics Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Statistik Regulasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <button
                key={index}
                onClick={() => onNavigate(stat.navigationTarget)}
                className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer text-left"
              >
                <div
                  className={`bg-gradient-to-br ${stat.bgGradient} p-6 text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{stat.icon}</div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{stat.count}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
                  <p className="text-sm opacity-90">{stat.description}</p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kategori Regulasi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Regulasi-regulasi ini dikelompokkan berdasarkan hierarki peraturan
              perundang-undangan untuk memudahkan pemahaman dan implementasi
            </p>
          </div>
        </div>

        {/* Regulation Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regulationCategories.map((category) => (
            <div
              key={category.id}
              className={`bg-gradient-to-br ${category.bgGradient} rounded-xl border-2 ${category.borderColor} ${category.hoverColor} shadow-lg transform transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl overflow-hidden`}
            >
              <div className="p-8">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <button
                    className="text-4xl mr-4 hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => setSelectedCategory(category.id)}
                    title={`Lihat semua ${category.title}`}
                  >
                    {category.icon}
                  </button>
                  <div>
                    <h3
                      className={`text-2xl font-bold ${category.accentColor}`}
                    >
                      {category.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Regulations List */}
                <div className="space-y-4">
                  {category.regulations.map((regulation, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 transform transition-all duration-200 hover:shadow-md hover:scale-101"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <span
                            className={`text-sm font-bold ${category.accentColor} bg-white px-2 py-1 rounded border`}
                          >
                            {regulation.number}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
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
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </button>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {regulation.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {regulation.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                <div className="mt-6 text-center">
                  <button
                    className={`${category.accentColor} bg-white border-2 ${category.borderColor} px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 flex items-center mx-auto`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    Lihat Semua {category.title}
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegulationPage;
