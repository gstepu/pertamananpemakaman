import { useState } from "react";

const RTHAtapPage = ({ onNavigate }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const rooftopImages = [
    {
      src: "/images/green-roof-1.jpg",
      title: "Green Roof Residensial",
      description:
        "Atap hijau pada bangunan rumah tinggal dengan tanaman sedum dan rumput",
    },
    {
      src: "/images/green-roof-2.jpg",
      title: "Rooftop Garden Perkantoran",
      description:
        "Taman atap pada gedung perkantoran dengan area relaksasi karyawan",
    },
    {
      src: "/images/green-roof-3.jpg",
      title: "Urban Farming Atap",
      description:
        "Pemanfaatan atap untuk bercocok tanam sayuran dan tanaman produktif",
    },
    {
      src: "/images/green-roof-4.jpg",
      title: "Intensive Green Roof",
      description:
        "Taman atap intensif dengan berbagai jenis tanaman dan fasilitas lengkap",
    },
    {
      src: "/images/green-roof-5.jpg",
      title: "Extensive Green Roof",
      description:
        "Atap hijau ekstensif dengan tanaman ground cover yang minim perawatan",
    },
    {
      src: "/images/green-roof-6.jpg",
      title: "Rooftop Hydroponic",
      description:
        "Sistem hidroponik pada atap untuk budidaya tanaman tanpa tanah",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="rooftopGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="2"
                  y="2"
                  width="16"
                  height="6"
                  fill="currentColor"
                  opacity="0.3"
                />
                <rect
                  x="2"
                  y="12"
                  width="16"
                  height="6"
                  fill="currentColor"
                  opacity="0.2"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="2"
                  fill="currentColor"
                  opacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#rooftopGrid)" />
          </svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-15 animate-float">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
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
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              RTH Bangunan Atap
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Memanfaatkan Atap Bangunan untuk Green Roof dan Urban Farming
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-sm opacity-90">Penghematan Energi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm opacity-90">Pengurangan Runoff</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">5°C</div>
                <div className="text-sm opacity-90">Penurunan Suhu</div>
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
              <span className="text-gray-800 font-medium">
                RTH Bangunan Atap
              </span>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Apa itu RTH Bangunan Atap?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                RTH Bangunan Atap atau Green Roof adalah sistem pemanfaatan atap
                bangunan dengan menanam vegetasi di atasnya. Konsep ini mengubah
                ruang yang tidak produktif menjadi area hijau yang memberikan
                manfaat ekologis, ekonomis, dan sosial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Di Jakarta, pemanfaatan atap untuk RTH sangat potensial
                mengingat keterbatasan lahan dan tingginya kepadatan bangunan.
                Green roof dapat membantu mengurangi urban heat island, menyerap
                air hujan, dan meningkatkan kualitas udara.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Manfaat Utama
              </h3>
              <ul className="space-y-2 text-blue-700">
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
                  Menurunkan suhu dalam bangunan
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
                  Menghemat penggunaan energi AC
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
                  Menyerap air hujan dan mengurangi banjir
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
                  Memproduksi oksigen dan menyerap CO2
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Galeri Green Roof
          </h2>

          {/* Main Image */}
          <div className="mb-6">
            <img
              src={rooftopImages[selectedImageIndex].src}
              alt={rooftopImages[selectedImageIndex].title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {rooftopImages[selectedImageIndex].title}
              </h3>
              <p className="text-gray-600">
                {rooftopImages[selectedImageIndex].description}
              </p>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {rooftopImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative group ${
                  selectedImageIndex === index ? "ring-4 ring-blue-500" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                />
                {selectedImageIndex === index && (
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Types of Green Roof */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Jenis-jenis Green Roof
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Extensive Green Roof
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Ketebalan media:</strong> 5-15 cm
                </li>
                <li>
                  <strong>Tanaman:</strong> Sedum, rumput, groundcover
                </li>
                <li>
                  <strong>Perawatan:</strong> Minimal
                </li>
                <li>
                  <strong>Berat:</strong> 80-150 kg/m²
                </li>
                <li>
                  <strong>Biaya:</strong> Relatif murah
                </li>
                <li>
                  <strong>Cocok untuk:</strong> Atap miring, bangunan eksisting
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Intensive Green Roof
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Ketebalan media:</strong> 20-60 cm
                </li>
                <li>
                  <strong>Tanaman:</strong> Pohon, semak, bunga
                </li>
                <li>
                  <strong>Perawatan:</strong> Intensif
                </li>
                <li>
                  <strong>Berat:</strong> 300-1000 kg/m²
                </li>
                <li>
                  <strong>Biaya:</strong> Lebih mahal
                </li>
                <li>
                  <strong>Cocok untuk:</strong> Bangunan baru, struktur kuat
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Langkah Implementasi
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Evaluasi Struktur Bangunan
                </h3>
                <p className="text-gray-700">
                  Pastikan struktur atap mampu menahan beban tambahan.
                  Konsultasikan dengan ahli struktur untuk analisis daya dukung.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Waterproofing dan Drainase
                </h3>
                <p className="text-gray-700">
                  Pasang sistem waterproofing yang berkualitas dan sistem
                  drainase yang baik untuk mencegah kebocoran dan genangan air.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Instalasi Sistem Growing Medium
                </h3>
                <p className="text-gray-700">
                  Pasang lapisan filter, media tanam yang ringan, dan sistem
                  irigasi sesuai dengan jenis green roof yang dipilih.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pemilihan dan Penanaman
                </h3>
                <p className="text-gray-700">
                  Pilih tanaman yang tahan kering, angin kencang, dan minim
                  perawatan. Tanam sesuai dengan desain yang telah dibuat.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Maintenance dan Monitoring
                </h3>
                <p className="text-gray-700">
                  Lakukan perawatan rutin seperti penyiraman, pemupukan, dan
                  monitoring kondisi tanaman serta sistem drainase.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips and Best Practices */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Tips dan Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pemilihan Tanaman
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Pilih tanaman native yang adaptif dengan iklim Jakarta
                </li>
                <li>• Prioritaskan tanaman tahan kekeringan dan angin</li>
                <li>• Pertimbangkan tanaman berbunga untuk estetika</li>
                <li>• Hindari tanaman berakar dalam untuk extensive roof</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sistem Irigasi
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Gunakan sistem drip irrigation untuk efisiensi air</li>
                <li>• Install rain sensor untuk otomatisasi</li>
                <li>• Pertimbangkan rainwater harvesting</li>
                <li>• Monitor kelembaban media tanam secara rutin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mulai Proyek Green Roof Anda
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Berkontribusi untuk Jakarta yang lebih hijau dengan memanfaatkan
            atap bangunan Anda. Konsultasikan rencana green roof dengan tim ahli
            kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Konsultasi Gratis
            </button>
            <button
              onClick={() => onNavigate("rth-info")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Pelajari RTH Lainnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHAtapPage;
