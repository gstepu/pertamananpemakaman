import { useState } from "react";

const RTHLingkunganPage = ({ onNavigate }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const communityImages = [
    {
      src: "/images/community-garden-1.jpg",
      title: "Taman Komunitas RT/RW",
      description:
        "Taman bersama yang dikelola oleh warga RT/RW untuk kegiatan sosial",
    },
    {
      src: "/images/community-garden-2.jpg",
      title: "Urban Farming Kelurahan",
      description:
        "Program urban farming skala kelurahan dengan partisipasi warga",
    },
    {
      src: "/images/community-garden-3.jpg",
      title: "Taman Bermain Hijau",
      description:
        "Area bermain anak yang terintegrasi dengan ruang terbuka hijau",
    },
    {
      src: "/images/community-garden-4.jpg",
      title: "Jalur Hijau Lingkungan",
      description:
        "Koridor hijau sepanjang jalan lingkungan dengan tanaman peneduh",
    },
    {
      src: "/images/community-garden-5.jpg",
      title: "Pocket Park",
      description:
        "Taman kecil di celah-celah perkotaan yang dimanfaatkan warga",
    },
    {
      src: "/images/community-garden-6.jpg",
      title: "Greenhouse Komunitas",
      description:
        "Rumah kaca bersama untuk budidaya tanaman secara berkelompok",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="communityGrid"
                width="25"
                height="25"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="3"
                  fill="currentColor"
                  opacity="0.4"
                />
                <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.6" />
                <circle
                  cx="19"
                  cy="19"
                  r="1"
                  fill="currentColor"
                  opacity="0.6"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#communityGrid)" />
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-15 animate-float">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,19H5V3H13V9H19V19Z" />
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
                  <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,14C18.7,14 24,15.3 24,18V20H8V18C8,15.3 13.3,14 16,14M8,4C10.2,4 12,5.8 12,8C12,10.2 10.2,12 8,12C5.8,12 4,10.2 4,8C4,5.8 5.8,4 8,4M8,14C10.7,14 16,15.3 16,18V20H0V18C0,15.3 5.3,14 8,14Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              RTH Lingkungan
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Membangun Ruang Terbuka Hijau Berbasis Komunitas dan Gotong Royong
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm opacity-90">Komunitas Aktif</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-90">Partisipasi Warga</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">500m²</div>
                <div className="text-sm opacity-90">Luas Rata-rata</div>
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
              <span className="text-gray-800 font-medium">RTH Lingkungan</span>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            RTH Berbasis Komunitas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                RTH Lingkungan adalah ruang terbuka hijau yang dikembangkan dan
                dikelola secara bersama-sama oleh masyarakat dalam suatu
                lingkungan. Konsep ini menekankan pada partisipasi aktif warga
                dalam menciptakan, memelihara, dan memanfaatkan ruang hijau di
                lingkungan tempat tinggal mereka.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Model RTH ini sangat efektif dalam membangun kesadaran
                lingkungan, memperkuat solidaritas sosial, dan menciptakan
                lingkungan yang lebih hijau dan sehat melalui gotong royong dan
                kearifan lokal.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                Prinsip RTH Komunitas
              </h3>
              <ul className="space-y-2 text-purple-700">
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
                  Partisipasi aktif seluruh warga
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
                  Gotong royong dan kerjasama
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
                  Keberlanjutan dan regenerasi
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
                  Manfaat bersama dan inklusif
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Galeri RTH Komunitas
          </h2>

          {/* Main Image */}
          <div className="mb-6">
            <img
              src={communityImages[selectedImageIndex].src}
              alt={communityImages[selectedImageIndex].title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {communityImages[selectedImageIndex].title}
              </h3>
              <p className="text-gray-600">
                {communityImages[selectedImageIndex].description}
              </p>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {communityImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative group ${
                  selectedImageIndex === index ? "ring-4 ring-purple-500" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                />
                {selectedImageIndex === index && (
                  <div className="absolute inset-0 bg-purple-500 bg-opacity-20 rounded-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Community Models */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Model RTH Komunitas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                🏘️ Taman RT/RW
              </h3>
              <p className="text-gray-700 mb-4">
                Taman skala RT/RW yang dikelola bersama untuk kegiatan warga.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Area berkumpul warga</li>
                <li>• Tempat acara komunitas</li>
                <li>• Playground anak</li>
                <li>• Gazebo dan bangku taman</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                🌱 Urban Farming
              </h3>
              <p className="text-gray-700 mb-4">
                Kebun komunitas untuk budidaya tanaman pangan bersama.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Lahan kolektif warga</li>
                <li>• Sistem bagi hasil</li>
                <li>• Pelatihan berkebun</li>
                <li>• Bank benih komunitas</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">
                🚶 Jalur Hijau
              </h3>
              <p className="text-gray-700 mb-4">
                Koridor hijau di sepanjang jalan lingkungan.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Peneduh pejalan kaki</li>
                <li>• Estetika lingkungan</li>
                <li>• Penyerap polusi</li>
                <li>• Identitas kawasan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Proses Pengembangan RTH Komunitas
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Inisiasi dan Sosialisasi
                </h3>
                <p className="text-gray-700">
                  Pembentukan kelompok inisiator, sosialisasi kepada warga, dan
                  penggalangan dukungan komunitas.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Survey dan Perencanaan
                </h3>
                <p className="text-gray-700">
                  Identifikasi lahan potensial, survey kebutuhan warga, dan
                  penyusunan master plan bersama.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mobilisasi Sumber Daya
                </h3>
                <p className="text-gray-700">
                  Pengumpulan dana swadaya, bantuan pemerintah, dan mobilisasi
                  tenaga kerja sukarela warga.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Implementasi Bersama
                </h3>
                <p className="text-gray-700">
                  Pelaksanaan pembangunan dengan sistem gotong royong, pembagian
                  tugas, dan kerja sama tim.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pengelolaan Berkelanjutan
                </h3>
                <p className="text-gray-700">
                  Pembentukan struktur pengelola, jadwal pemeliharaan, dan
                  mekanisme regenerasi kepemimpinan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🎯 Faktor Keberhasilan
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Kepemimpinan yang kuat dan inklusif
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Partisipasi aktif dari berbagai kalangan
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Dukungan pemerintah dan stakeholder
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Sistem pengelolaan yang transparan
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                Program edukasi dan capacity building
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              💡 Tips Membangun Komunitas
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Mulai dari yang Kecil
                </h4>
                <p className="text-sm text-gray-600">
                  Awali dengan proyek sederhana yang mudah dicapai untuk
                  membangun momentum
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Libatkan Semua Usia
                </h4>
                <p className="text-sm text-gray-600">
                  Ciptakan kegiatan yang melibatkan anak-anak hingga lansia
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Dokumentasi Kegiatan
                </h4>
                <p className="text-sm text-gray-600">
                  Catat dan bagikan progres untuk menjaga semangat komunitas
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Jaringan dengan Komunitas Lain
                </h4>
                <p className="text-sm text-gray-600">
                  Belajar dari pengalaman komunitas hijau lainnya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Manfaat RTH Komunitas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,19H5V3H13V9H19V19Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sosial
              </h3>
              <p className="text-gray-600">
                Memperkuat kohesi sosial, gotong royong, dan membangun rasa
                kebersamaan antar warga
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lingkungan
              </h3>
              <p className="text-gray-600">
                Meningkatkan kualitas udara, mengurangi polusi, dan menciptakan
                iklim mikro yang sejuk
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.8,10.9C9.53,10.31 8.8,9.7 8.8,8.75C8.8,7.66 9.81,6.9 11.5,6.9C13.28,6.9 13.94,7.75 14,9H16.21C16.14,7.28 15.09,5.7 13,5.19V3H10V5.16C8.06,5.58 6.5,6.84 6.5,8.77C6.5,11.08 8.41,12.23 11.2,12.9C13.7,13.5 14.2,14.38 14.2,15.31C14.2,16 13.71,17.1 11.5,17.1C9.44,17.1 8.63,16.18 8.5,15H6.32C6.44,17.19 8.08,18.42 10,18.83V21H13V18.85C14.95,18.5 16.5,17.35 16.5,15.3C16.5,12.46 14.07,11.5 11.8,10.9Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ekonomi
              </h3>
              <p className="text-gray-600">
                Menghemat pengeluaran keluarga, meningkatkan nilai properti, dan
                menciptakan peluang usaha
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bergabung dengan Gerakan RTH Komunitas
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Mari bersama-sama membangun lingkungan yang lebih hijau, sehat, dan
            berkelanjutan melalui kekuatan gotong royong dan partisipasi aktif
            seluruh warga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
            >
              Mulai Komunitas RTH
            </button>
            <button
              onClick={() => onNavigate("rth-info")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Pelajari RTH Lainnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHLingkunganPage;
