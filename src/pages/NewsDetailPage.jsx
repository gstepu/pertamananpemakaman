import { useState, useEffect } from "react";

const NewsDetailPage = ({ onNavigate, newsId }) => {
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data berita dummy yang sama dengan NewsPage
  const newsData = [
    {
      id: 1,
      title: "Program Penanaman 10.000 Pohon di Jakarta Selatan Dimulai",
      excerpt:
        "Dinas Pertamanan dan Hutan Kota DKI Jakarta memulai program massal penanaman pohon untuk meningkatkan kualitas udara di ibu kota.",
      content: `
        <p>Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta resmi memulai program penanaman 10.000 pohon di wilayah Jakarta Selatan. Program ini merupakan bagian dari upaya pemerintah provinsi untuk meningkatkan tutupan hijau dan kualitas udara di ibu kota.</p>
        
        <p>Pohon yang ditanam meliputi berbagai jenis seperti mahoni, trembesi, dan angsana yang telah terbukti efektif dalam menyerap polutan udara. Kepala Dinas Pertamanan dan Hutan Kota DKI Jakarta, Dr. Bambang Sutrisno, mengatakan bahwa program ini akan dilaksanakan secara bertahap selama 6 bulan ke depan.</p>
        
        <h3>Lokasi Penanaman</h3>
        <p>Program penanaman akan dilaksanakan di beberapa lokasi strategis, antara lain:</p>
        <ul>
          <li>Taman Langsat di Kebayoran Baru</li>
          <li>Kawasan Tebet Eco Park</li>
          <li>Sepanjang Jalan Fatmawati</li>
          <li>Area RTH di Kemang</li>
          <li>Taman Ayodya di Kebayoran Baru</li>
        </ul>
        
        <h3>Manfaat Program</h3>
        <p>Program penanaman pohon ini diharapkan dapat memberikan manfaat yang signifikan bagi lingkungan dan masyarakat Jakarta, termasuk:</p>
        <ul>
          <li>Peningkatan kualitas udara hingga 15%</li>
          <li>Penurunan suhu udara 2-3 derajat Celsius</li>
          <li>Peningkatan tutupan hijau di Jakarta Selatan</li>
          <li>Habitat yang lebih baik untuk fauna urban</li>
        </ul>
        
        <p>Selain itu, program ini juga melibatkan partisipasi masyarakat melalui kegiatan <em>community planting</em> yang akan diselenggarakan setiap akhir pekan di berbagai lokasi.</p>
        
        <h3>Dukungan Teknologi</h3>
        <p>Untuk memastikan keberhasilan program, dinas akan menggunakan teknologi monitoring pohon berbasis IoT untuk memantau pertumbuhan dan kesehatan setiap pohon yang ditanam. Sistem ini dapat memberikan data real-time tentang kondisi tanah, kelembaban, dan kesehatan pohon.</p>
        
        <p>"Kami berkomitmen untuk menjadikan Jakarta sebagai kota yang lebih hijau dan nyaman untuk ditinggali. Program ini adalah salah satu langkah konkret dalam mewujudkan visi tersebut," ungkap Dr. Bambang Sutrisno.</p>
      `,
      fullImage: "/api/placeholder/1200/600",
      author: "Tim Redaksi",
      authorImage: "/api/placeholder/100/100",
      authorBio:
        "Tim redaksi Dinas Pertamanan dan Hutan Kota DKI Jakarta yang berdedikasi menyampaikan informasi terkini seputar program-program lingkungan.",
      date: "2024-12-20",
      readTime: "5 menit",
      category: "program",
      categoryColor: "bg-blue-100 text-blue-800",
      tags: ["penanaman", "pohon", "lingkungan", "jakarta", "udara bersih"],
      location: "Jakarta Selatan",
      views: 1247,
      likes: 89,
      shares: 23,
    },
    {
      id: 2,
      title: "Taman Menteng Raih Penghargaan Taman Terbaik Se-Asia Tenggara",
      excerpt:
        "Taman Menteng berhasil meraih penghargaan sebagai taman kota terbaik se-Asia Tenggara berkat inovasi konsep ramah lingkungan.",
      content: `
        <p>Jakarta - Taman Menteng yang dikelola oleh Dinas Pertamanan dan Hutan Kota DKI Jakarta berhasil meraih penghargaan bergengsi sebagai taman kota terbaik se-Asia Tenggara. Penghargaan ini diberikan atas inovasi konsep taman yang menggabungkan teknologi modern dengan kelestarian lingkungan.</p>
        
        <p>Taman yang berlokasi di jantung kota Jakarta ini telah menjadi model pengembangan taman urban yang berkelanjutan. Dengan luas 3,5 hektar, Taman Menteng dilengkapi dengan berbagai fasilitas modern yang ramah lingkungan.</p>
        
        <h3>Inovasi Taman Menteng</h3>
        <p>Beberapa inovasi yang membuat Taman Menteng unggul:</p>
        <ul>
          <li>Sistem irigasi otomatis dengan sensor kelembaban tanah</li>
          <li>Lampu taman bertenaga solar panel</li>
          <li>Area playground dengan material daur ulang</li>
          <li>Zona edukasi lingkungan interaktif</li>
          <li>Sistem pengelolaan sampah terintegrasi</li>
        </ul>
        
        <h3>Pengakuan Internasional</h3>
        <p>Penghargaan ini diberikan oleh <strong>Asian Parks and Recreation Association (APRA)</strong> dalam kategori "Best Urban Park Innovation 2024". Tim juri menilai Taman Menteng berhasil menciptakan konsep taman yang tidak hanya indah secara visual, tetapi juga memberikan dampak positif bagi lingkungan dan masyarakat.</p>
        
        <p>"Taman Menteng adalah contoh nyata bagaimana teknologi dapat diintegrasikan dengan alam untuk menciptakan ruang publik yang berkelanjutan," kata Sarah Wijaya, Ketua Tim Pengelola Taman Menteng.</p>
        
        <h3>Dampak bagi Masyarakat</h3>
        <p>Keberadaan Taman Menteng telah memberikan dampak positif yang signifikan:</p>
        <ul>
          <li>Menjadi ruang rekreasi keluarga yang aman dan nyaman</li>
          <li>Menurunkan suhu udara di sekitar kawasan Menteng</li>
          <li>Menjadi habitat untuk berbagai jenis burung urban</li>
          <li>Pusat edukasi lingkungan untuk pelajar</li>
        </ul>
        
        <p>Kedepannya, konsep Taman Menteng akan dijadikan model untuk pengembangan taman-taman lain di DKI Jakarta, dengan adaptasi sesuai karakteristik masing-masing wilayah.</p>
      `,
      fullImage: "/api/placeholder/1200/600",
      author: "Sarah Wijaya",
      authorImage: "/api/placeholder/100/100",
      authorBio:
        "Landscape architect dan sustainability expert dengan pengalaman 15 tahun dalam pengembangan ruang terbuka hijau urban.",
      date: "2024-12-18",
      readTime: "4 menit",
      category: "prestasi",
      categoryColor: "bg-yellow-100 text-yellow-800",
      tags: ["penghargaan", "taman", "menteng", "inovasi", "internasional"],
      location: "Taman Menteng, Jakarta Pusat",
      views: 892,
      likes: 156,
      shares: 45,
    },
  ];

  useEffect(() => {
    // Simulasi loading data
    setLoading(true);

    // Cari berita berdasarkan ID
    const foundNews = newsData.find((item) => item.id === parseInt(newsId));

    // Simulasi API call delay
    setTimeout(() => {
      setNews(foundNews);

      // Ambil berita terkait (berita lain dalam kategori yang sama)
      const related = newsData
        .filter(
          (item) =>
            item.id !== parseInt(newsId) &&
            item.category === foundNews?.category,
        )
        .slice(0, 3);
      setRelatedNews(related);

      setLoading(false);
    }, 800);
  }, [newsId]);

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

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = news?.title;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        );
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${title} ${url}`);
        break;
      case "telegram":
        window.open(`https://t.me/share/url?url=${url}&text=${title}`);
        break;
      default:
        break;
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link berhasil disalin!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
          <p className="text-gray-600">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Artikel Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Maaf, artikel yang Anda cari tidak dapat ditemukan.
          </p>
          <button
            onClick={() => onNavigate("news")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Kembali ke Halaman Berita
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
              onClick={() => onNavigate("news")}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Berita
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
            <span className="text-gray-500 truncate">{news.title}</span>
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
                  src={news.fullImage}
                  alt={news.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${news.categoryColor}`}
                  >
                    {news.category.charAt(0).toUpperCase() +
                      news.category.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  📍 {news.location}
                </div>
              </div>

              {/* Article Header */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {news.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {news.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={news.authorImage}
                      alt={news.author}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {news.author}
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
                    {formatDate(news.date)}
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
                    {news.readTime}
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
                    {news.views.toLocaleString()} views
                  </div>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:mb-2"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-gray-700 mr-2">
                      Tags:
                    </span>
                    {news.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interaction Stats */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {news.likes}
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      {news.shares}
                    </button>
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
                  src={news.authorImage}
                  alt={news.author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {news.author}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {news.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Share Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bagikan Artikel
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleShare("facebook")}
                  className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center justify-center p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085" />
                  </svg>
                  WhatsApp
                </button>
                <button
                  onClick={copyLink}
                  className="flex items-center justify-center p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Berita Terkait
                </h3>
                <div className="space-y-4">
                  {relatedNews.map((item) => (
                    <div
                      key={item.id}
                      className="flex cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <img
                        src={item.fullImage}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg mr-3 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-1">
                          {formatDate(item.date)}
                        </p>
                        <p className="text-xs text-gray-600">{item.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
