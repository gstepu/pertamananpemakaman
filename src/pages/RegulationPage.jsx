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
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Dasar Hukum & Regulasi
          </h1>
          <p className="text-lg text-gray-600">
            Kumpulan lengkap peraturan perundang-undangan yang menjadi landasan
            hukum penyelenggaraan urusan pertamanan dan hutan kota DKI Jakarta
          </p>
        </div>
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
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`text-2xl font-bold ${category.accentColor} hover:underline cursor-pointer transition-all duration-200 hover:scale-105 bg-transparent border-none p-0 text-left`}
                      title={`Lihat semua ${category.title}`}
                    >
                      {category.title}
                    </button>
                    <p className="text-gray-600 font-medium">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Regulations List */}
                <div className="space-y-4">
                  {category.regulations.map((regulation, index) => (
                    <button
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 transform transition-all duration-200 hover:shadow-md hover:scale-101 w-full text-left cursor-pointer"
                      onClick={() => {
                        // TODO: Add file preview functionality here
                        console.log(`Opening preview for: ${regulation.title}`);
                        // For now, show an alert - you can replace this with actual file preview logic
                        alert(
                          `Preview untuk ${regulation.title} akan ditampilkan di sini. File preview akan ditambahkan.`,
                        );
                      }}
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
                    </button>
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
