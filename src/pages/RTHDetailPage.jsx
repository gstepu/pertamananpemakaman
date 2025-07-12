import { useState, useEffect } from "react";

const RTHDetailPage = ({ onNavigate, articleId }) => {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data artikel RTH yang sama dengan RTHInfoPage
  const rthArticles = [
    {
      id: 1,
      title: "Pentingnya Ruang Terbuka Hijau untuk Kualitas Udara Jakarta",
      date: "2024-12-20",
      excerpt:
        "Ruang Terbuka Hijau (RTH) memiliki peran vital dalam meningkatkan kualitas udara di perkotaan, terutama di Jakarta yang padat penduduk.",
      content: `
        <p>Jakarta, sebagai ibu kota Indonesia dengan populasi lebih dari 10 juta jiwa, menghadapi tantangan serius dalam hal kualitas udara. Ruang Terbuka Hijau (RTH) memainkan peran yang sangat vital dalam upaya meningkatkan kualitas udara di perkotaan yang padat penduduk ini.</p>
        
        <h3>Fungsi RTH dalam Penyerapan Polutan</h3>
        <p>Ruang Terbuka Hijau berfungsi sebagai "paru-paru kota" yang secara aktif menyerap berbagai jenis polutan udara. Tanaman dalam RTH dapat menyerap karbon dioksida (CO2), sulfur dioksida (SO2), nitrogen oksida (NOx), dan partikel-partikel halus PM2.5 yang berbahaya bagi kesehatan.</p>
        
        <h3>Manfaat Ekologis RTH</h3>
        <ul>
          <li>Menurunkan suhu udara melalui proses evapotranspirasi</li>
          <li>Meningkatkan kelembaban udara di lingkungan sekitar</li>
          <li>Mengurangi efek urban heat island</li>
          <li>Menyediakan habitat untuk fauna urban</li>
          <li>Mengurangi tingkat kebisingan</li>
        </ul>
        
        <h3>Standar Minimal RTH</h3>
        <p>Menurut UU No. 26 Tahun 2007 tentang Penataan Ruang, setiap kota wajib menyediakan RTH minimal 30% dari total luas wilayah, yang terdiri dari 20% RTH publik dan 10% RTH privat.</p>
        
        <h3>RTH di Jakarta</h3>
        <p>Saat ini, Jakarta memiliki berbagai jenis RTH mulai dari taman kota, hutan kota, jalur hijau, hingga roof garden. Setiap jenis RTH ini memberikan kontribusi yang signifikan dalam meningkatkan kualitas udara dan kehidupan masyarakat Jakarta.</p>
        
        <p>Investasi dalam pengembangan RTH bukan hanya memberikan manfaat lingkungan, tetapi juga manfaat ekonomi dan sosial yang berkelanjutan untuk generasi mendatang.</p>
      `,
      fullImage: "/api/placeholder/1200/600",
      category: "Lingkungan",
      categoryColor: "bg-green-100 text-green-800",
      author: "Tim RTH Jakarta",
      authorImage: "/api/placeholder/100/100",
      authorBio:
        "Tim ahli yang berdedikasi dalam pengembangan dan pengelolaan Ruang Terbuka Hijau di DKI Jakarta.",
      tags: [
        "RTH",
        "kualitas udara",
        "lingkungan",
        "jakarta",
        "urban planning",
      ],
      readTime: "6 menit",
      views: 845,
      likes: 67,
    },
    {
      id: 2,
      title: "Strategi Pengembangan RTH di Wilayah Padat Penduduk",
      date: "2024-12-18",
      excerpt:
        "Implementasi strategi inovatif untuk mengoptimalkan ruang terbuka hijau di area dengan kepadatan tinggi di DKI Jakarta.",
      content: `
        <p>Pengembangan Ruang Terbuka Hijau di wilayah padat penduduk memerlukan strategi khusus dan inovatif. DKI Jakarta, dengan kepadatan penduduk yang tinggi, menghadapi tantangan unik dalam menyediakan RTH yang memadai.</p>
        
        <h3>Tantangan Utama</h3>
        <p>Wilayah padat penduduk menghadapi beberapa tantangan dalam pengembangan RTH:</p>
        <ul>
          <li>Keterbatasan lahan yang tersedia</li>
          <li>Harga tanah yang tinggi</li>
          <li>Konflik kepentingan penggunaan lahan</li>
          <li>Kebutuhan infrastruktur yang kompetitif</li>
        </ul>
        
        <h3>Strategi Inovatif</h3>
        <p>Untuk mengatasi tantangan tersebut, beberapa strategi inovatif telah dikembangkan:</p>
        
        <h4>1. Vertical Garden</h4>
        <p>Pemanfaatan dinding bangunan untuk menciptakan taman vertikal yang tidak memerlukan lahan horizontal tambahan.</p>
        
        <h4>2. Rooftop Garden</h4>
        <p>Pengoptimalan atap bangunan sebagai ruang hijau yang dapat berfungsi ganda sebagai area rekreasi dan penyerap polutan.</p>
        
        <h4>3. Pocket Park</h4>
        <p>Pengembangan taman kecil di celah-celah perkotaan yang dapat diakses publik.</p>
        
        <h4>4. Green Corridor</h4>
        <p>Pengembangan koridor hijau sepanjang jalan dan jalur transportasi umum.</p>
        
        <h3>Implementasi dan Monitoring</h3>
        <p>Keberhasilan strategi ini memerlukan:</p>
        <ul>
          <li>Kerjasama antara pemerintah, swasta, dan masyarakat</li>
          <li>Sistem monitoring yang berkelanjutan</li>
          <li>Adaptasi teknologi smart city</li>
          <li>Edukasi dan partisipasi masyarakat</li>
        </ul>
        
        <p>Dengan penerapan strategi yang tepat, wilayah padat penduduk tetap dapat memiliki RTH yang memadai dan berkelanjutan.</p>
      `,
      fullImage: "/api/placeholder/1200/600",
      category: "Perencanaan",
      categoryColor: "bg-blue-100 text-blue-800",
      author: "Dinas Pertamanan",
      authorImage: "/api/placeholder/100/100",
      authorBio:
        "Tim perencana dan pengembang RTH dari Dinas Pertamanan dan Hutan Kota DKI Jakarta.",
      tags: ["strategi", "perencanaan", "RTH", "urban design", "inovasi"],
      readTime: "8 menit",
      views: 623,
      likes: 89,
    },
  ];

  useEffect(() => {
    setLoading(true);

    // Cari artikel berdasarkan ID
    const foundArticle = rthArticles.find(
      (item) => item.id === parseInt(articleId),
    );

    setTimeout(() => {
      setArticle(foundArticle);

      // Ambil artikel terkait
      const related = rthArticles
        .filter((item) => item.id !== parseInt(articleId))
        .slice(0, 3);
      setRelatedArticles(related);

      setLoading(false);
    }, 800);
  }, [articleId]);

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Jakarta",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
          <p className="text-gray-600">Memuat artikel RTH...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌳</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Artikel RTH Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Maaf, artikel RTH yang Anda cari tidak dapat ditemukan.
          </p>
          <button
            onClick={() => onNavigate("rth-info")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Kembali ke Informasi RTH
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => onNavigate("LandingPage")}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Beranda
            </button>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <button
              onClick={() => onNavigate("rth-info")}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Informasi RTH
            </button>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-500 truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="relative">
                <img
                  src={article.fullImage}
                  alt={article.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${article.categoryColor}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Header */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {article.author}
                      </p>
                      <p className="text-sm text-gray-500">Penulis</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {formatDate(article.date)}
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {article.readTime}
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {article.views.toLocaleString()} views
                  </div>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:mb-2"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-gray-700 mr-2">
                      Tags:
                    </span>
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tentang Penulis
              </h3>
              <div className="flex items-start">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {article.author}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {article.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* RTH Quick Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Informasi RTH
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">30%</div>
                  <div className="text-sm text-green-700">
                    Target RTH Jakarta
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">20%</div>
                  <div className="text-sm text-blue-700">RTH Publik</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">10%</div>
                  <div className="text-sm text-purple-700">RTH Privat</div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Artikel RTH Lainnya
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((item) => (
                    <div
                      key={item.id}
                      className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      onClick={() => onNavigate(`rth-detail-${item.id}`)}
                    >
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-1">
                        {formatDate(item.date)}
                      </p>
                      <p className="text-xs text-gray-600">{item.readTime}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => onNavigate("rth-info")}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    Lihat Semua Artikel RTH →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHDetailPage;
