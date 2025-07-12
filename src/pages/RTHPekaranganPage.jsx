import { useState } from "react";

const RTHPekaranganPage = ({ onNavigate }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const gardenImages = [
    {
      src: "/images/home-garden-1.jpg",
      title: "Taman Depan Rumah",
      description:
        "Desain taman depan dengan kombinasi tanaman hias dan produktif",
    },
    {
      src: "/images/home-garden-2.jpg",
      title: "Kebun Sayur Belakang",
      description:
        "Pemanfaatan halaman belakang untuk bercocok tanam sayuran organik",
    },
    {
      src: "/images/home-garden-3.jpg",
      title: "Vertical Garden",
      description:
        "Taman vertikal untuk mengoptimalkan ruang sempit di samping rumah",
    },
    {
      src: "/images/home-garden-4.jpg",
      title: "Herb Garden",
      description: "Kebun bumbu dapur dengan tanaman rempah dan obat keluarga",
    },
    {
      src: "/images/home-garden-5.jpg",
      title: "Container Garden",
      description: "Berkebun dalam pot dan container untuk area terbatas",
    },
    {
      src: "/images/home-garden-6.jpg",
      title: "Aquaponic System",
      description: "Sistem akuaponik sederhana untuk budidaya ikan dan sayuran",
    },
  ];

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
                id="gardenGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="5" cy="5" r="3" fill="currentColor" opacity="0.3" />
                <circle
                  cx="15"
                  cy="15"
                  r="3"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M0,10 Q10,5 20,10 Q10,15 0,10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#gardenGrid)" />
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-15 animate-float">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
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
              RTH Pekarangan
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Mengoptimalkan Pekarangan Rumah untuk Taman dan Urban Farming
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm opacity-90">Hemat Belanja Sayur</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">2m²</div>
                <div className="text-sm opacity-90">Luas Minimal</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">365</div>
                <div className="text-sm opacity-90">Hari Panen</div>
              </div>
            </div>
          </div>
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
              <button
                onClick={() => onNavigate("rth-info")}
                className="text-gray-500 hover:text-green-600 transition-colors"
              >
                Informasi RTH
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
              <span className="text-gray-800 font-medium">RTH Pekarangan</span>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pekarangan Produktif dan Hijau
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                RTH Pekarangan adalah pemanfaatan lahan di sekitar rumah untuk
                ditanami vegetasi yang memberikan manfaat ekologis, ekonomis,
                dan estetika. Konsep ini mengubah pekarangan menjadi ruang
                produktif yang dapat menghasilkan pangan sehat dan menciptakan
                iklim mikro yang nyaman.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Di Jakarta dengan lahan terbatas, optimalisasi pekarangan
                menjadi sangat penting untuk meningkatkan ketahanan pangan
                keluarga, mengurangi jejak karbon, dan menciptakan lingkungan
                yang lebih sehat.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Manfaat Pekarangan Hijau
              </h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pangan sehat untuk keluarga
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Menghemat pengeluaran belanja
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Meningkatkan kualitas udara rumah
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Menciptakan ruang relaksasi
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Galeri Pekarangan Hijau
          </h2>

          {/* Main Image */}
          <div className="mb-6">
            <img
              src={gardenImages[selectedImageIndex].src}
              alt={gardenImages[selectedImageIndex].title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {gardenImages[selectedImageIndex].title}
              </h3>
              <p className="text-gray-600">
                {gardenImages[selectedImageIndex].description}
              </p>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {gardenImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative group ${
                  selectedImageIndex === index ? "ring-4 ring-green-500" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                />
                {selectedImageIndex === index && (
                  <div className="absolute inset-0 bg-green-500 bg-opacity-20 rounded-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Garden Types */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Jenis Pekarangan Produktif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                🥬 Kebun Sayur
              </h3>
              <p className="text-gray-700 mb-4">
                Budidaya sayuran organik untuk konsumsi sehari-hari keluarga.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Kangkung, bayam, selada</li>
                <li>• Tomat, cabai, terong</li>
                <li>• Buncis, kacang panjang</li>
                <li>• Kemangi, daun bawang</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">
                🌿 Apotek Hidup
              </h3>
              <p className="text-gray-700 mb-4">
                Tanaman obat dan rempah untuk kesehatan keluarga.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Jahe, kunyit, temulawak</li>
                <li>• Lidah buaya, kumis kucing</li>
                <li>• Serai, pandan wangi</li>
                <li>• Daun mint, oregano</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                🌺 Taman Hias
              </h3>
              <p className="text-gray-700 mb-4">
                Tanaman hias untuk keindahan dan kenyamanan visual.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Bunga mawar, melati</li>
                <li>• Tanaman merambat</li>
                <li>• Pakis dan tanaman teduh</li>
                <li>• Tanaman air mini</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step by Step Guide */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Panduan Memulai Pekarangan Produktif
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Survey dan Perencanaan
                </h3>
                <p className="text-gray-700">
                  Ukur luas lahan, analisis kondisi tanah, arah sinar matahari,
                  dan sumber air. Buat sketsa desain tata letak tanaman.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Persiapan Media Tanam
                </h3>
                <p className="text-gray-700">
                  Bersihkan lahan, gemburkan tanah, tambahkan kompos atau pupuk
                  organik untuk meningkatkan kesuburan tanah.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pemilihan Tanaman
                </h3>
                <p className="text-gray-700">
                  Pilih tanaman sesuai iklim, ukuran lahan, dan kebutuhan
                  keluarga. Kombinasikan tanaman produktif dan hias.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Penanaman dan Instalasi
                </h3>
                <p className="text-gray-700">
                  Tanam bibit sesuai jarak tanam yang tepat. Pasang sistem
                  irigasi sederhana dan pagar pembatas jika diperlukan.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Perawatan Berkelanjutan
                </h3>
                <p className="text-gray-700">
                  Lakukan penyiraman rutin, pemupukan berkala, pengendalian hama
                  organik, dan panen tepat waktu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips and Techniques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              💡 Tips Sukses
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Mulai dari tanaman yang mudah seperti kangkung dan bayam
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Gunakan pupuk kompos buatan sendiri dari sampah organik
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Siram tanaman di pagi atau sore hari
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Rotasi tanaman untuk menjaga kesuburan tanah
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Libatkan seluruh anggota keluarga dalam berkebun
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🛠️ Teknik Lanjutan
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Companion Planting
                </h4>
                <p className="text-sm text-gray-600">
                  Tanam beberapa jenis tanaman berdampingan yang saling
                  menguntungkan
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Vertikultur</h4>
                <p className="text-sm text-gray-600">
                  Berkebun secara vertikal untuk mengoptimalkan lahan sempit
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Hidroponik Sederhana
                </h4>
                <p className="text-sm text-gray-600">
                  Budidaya tanaman tanpa tanah untuk hasil yang lebih maksimal
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Rainwater Harvesting
                </h4>
                <p className="text-sm text-gray-600">
                  Menampung air hujan untuk kebutuhan penyiraman
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mulai Pekarangan Produktif Anda
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Bergabunglah dengan gerakan Jakarta Berkebun dan ciptakan pekarangan
            yang produktif, sehat, dan berkelanjutan untuk keluarga dan
            lingkungan yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("seedling-application")}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
            >
              Ajukan Bibit Gratis
            </button>
            <button
              onClick={() => onNavigate("rth-info")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
            >
              Pelajari RTH Lainnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHPekaranganPage;
