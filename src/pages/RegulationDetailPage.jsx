const RegulationDetailPage = ({ onNavigate, type }) => {
  const getPageData = () => {
    switch (type) {
      case "undang-undang":
        return {
          title: "Undang-Undang Terkait Pertamanan",
          subtitle:
            "Regulasi tingkat nasional yang mengatur pertamanan dan hutan kota",
          color: "blue",
          regulations: [
            {
              id: 1,
              title: "UU No. 26 Tahun 2007",
              subtitle: "Tentang Penataan Ruang",
              description:
                "Mengatur tata ruang wilayah nasional, provinsi, dan kabupaten/kota termasuk kawasan hijau perkotaan",
              link: "#",
            },
            {
              id: 2,
              title: "UU No. 11 Tahun 2020",
              subtitle: "Tentang Cipta Kerja",
              description:
                "Memberikan framework baru untuk pengembangan infrastruktur hijau perkotaan",
              link: "#",
            },
            {
              id: 3,
              title: "UU No. 32 Tahun 2009",
              subtitle: "Tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
              description:
                "Mengatur aspek lingkungan hidup termasuk konservasi dan restorasi ekosistem",
              link: "#",
            },
          ],
        };
      case "peraturan-pemerintah":
        return {
          title: "Peraturan Pemerintah",
          subtitle: "Regulasi tingkat pusat untuk implementasi RTH",
          color: "green",
          regulations: [
            {
              id: 1,
              title: "PP No. 63 Tahun 2002",
              subtitle: "Tentang Hutan Kota",
              description:
                "Mengatur penyelenggaraan hutan kota sebagai bagian dari RTH publik",
              link: "#",
            },
            {
              id: 2,
              title: "PP No. 15 Tahun 2010",
              subtitle: "Tentang Penyelenggaraan Penataan Ruang",
              description:
                "Petunjuk teknis pelaksanaan penataan ruang termasuk penyediaan RTH",
              link: "#",
            },
          ],
        };
      case "peraturan-daerah":
        return {
          title: "Peraturan Daerah DKI Jakarta",
          subtitle: "Regulasi khusus untuk RTH di Provinsi DKI Jakarta",
          color: "purple",
          regulations: [
            {
              id: 1,
              title: "Perda DKI No. 1 Tahun 2012",
              subtitle: "Tentang Rencana Tata Ruang Wilayah 2030",
              description:
                "Penetapan kawasan RTH strategis dan target 30% RTH di Jakarta",
              link: "#",
            },
            {
              id: 2,
              title: "Perda DKI No. 1 Tahun 2014",
              subtitle:
                "Tentang Rencana Detail Tata Ruang dan Peraturan Zonasi",
              description: "Aturan detail zonasi RTH di setiap wilayah Jakarta",
              link: "#",
            },
          ],
        };
      case "keputusan-gubernur":
        return {
          title: "Keputusan Gubernur DKI Jakarta",
          subtitle: "Kebijakan operasional dan implementasi RTH",
          color: "orange",
          regulations: [
            {
              id: 1,
              title: "Kepgub No. 38 Tahun 2012",
              subtitle: "Tentang Bangunan Gedung Hijau",
              description:
                "Pedoman pembangunan gedung ramah lingkungan dengan integrasi RTH",
              link: "#",
            },
            {
              id: 2,
              title: "Kepgub No. 150 Tahun 2014",
              subtitle: "Tentang Pedoman Pelaksanaan Green Building",
              description:
                "Implementasi konsep bangunan hijau termasuk roof garden dan vertical garden",
              link: "#",
            },
          ],
        };
      default:
        return {
          title: "Regulasi RTH",
          subtitle: "Kumpulan regulasi terkait Ruang Terbuka Hijau",
          color: "gray",
          regulations: [],
        };
    }
  };

  const pageData = getPageData();
  const colorConfig = {
    blue: {
      gradient: "from-blue-600 to-blue-800",
      accent: "blue-500",
      text: "blue-600",
      bg: "blue-50",
    },
    green: {
      gradient: "from-green-600 to-green-800",
      accent: "green-500",
      text: "green-600",
      bg: "green-50",
    },
    purple: {
      gradient: "from-purple-600 to-purple-800",
      accent: "purple-500",
      text: "purple-600",
      bg: "purple-50",
    },
    orange: {
      gradient: "from-orange-600 to-orange-800",
      accent: "orange-500",
      text: "orange-600",
      bg: "orange-50",
    },
  };

  const colors = colorConfig[pageData.color];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {pageData.title}
          </h1>
          <p className="text-lg text-gray-600">{pageData.subtitle}</p>
        </div>
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
              <button
                onClick={() => onNavigate("regulation")}
                className="text-gray-500 hover:text-green-600 transition-colors"
              >
                Regulasi
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
              <span className="text-gray-800 font-medium">
                {pageData.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Regulation List */}
        <div className="space-y-6">
          {pageData.regulations.map((regulation) => (
            <div
              key={regulation.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-12 h-12 bg-${colors.accent} rounded-full flex items-center justify-center mr-4`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {regulation.title}
                      </h3>
                      <p className={`text-${colors.text} font-medium`}>
                        {regulation.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 ml-16">
                    {regulation.description}
                  </p>
                </div>
                <button
                  className={`ml-4 bg-${colors.accent} text-white px-4 py-2 rounded-lg hover:bg-${colors.accent}/90 transition-colors font-medium inline-flex items-center`}
                >
                  Baca Selengkapnya
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
          ))}
        </div>

        {/* Back to RTH Info */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate("regulation")}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium inline-flex items-center"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Regulasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegulationDetailPage;
