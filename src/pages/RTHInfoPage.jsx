import { useState } from "react";

const RTHInfoPage = ({ onNavigate }) => {
  const [selectedTypology, setSelectedTypology] = useState(null);

  // Data tipologi RTH
  const rthTypologies = {
    a: {
      title: "Tipologi A - RTH Publik",
      description:
        "Ruang Terbuka Hijau yang dikelola pemerintah untuk kepentingan umum",
      types: [
        {
          name: "Jalur Hijau",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/07d.%20jalur%20hijau%20sempadan%20rel%20kereta%20api.png",
          description:
            "Jalur Hijau paling sedikit memiliki kriteria : jalur penempatan tanaman serta elemen lanskap lainnya terletak pada ruang milik jalan maupun pada ruang pengawasan jalan; lebar jalur hijau sempadan jalan, sempadan jalur kereta api dan sempadan jaringan transmisi dan gardu listrik sesuai peraturan perundang-undangan; proporsi jalur hijau terdiri atas paling sedikit 70% (tujuh puluh persen) tutupan hijau dan sisanya berupa tutupan nonhijau ramah lingkungan; sebagai daerah resapan air; sebagai pengendali iklim mikro; dan sebagai tempat aktivitas sosial masyarakat secara terbatas.",
        },
        {
          name: "Pemakaman",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/08.%20pemakaman.png",
          description:
            "Pemakaman paling sedikit memiliki kriteria : sebagai tempat penguburan jenazah; sebagai daerah resapan air; sebagai pengendali iklim mikro; sebagai tempat aktivitas sosial masyarakat secara terbatas; memiliki radius pelayanan 2.500 m (dua ribu lima ratus meter); memiliki luas perpetakan paling kecil 1,2 m2 (satu koma dua meter persegi) per kapita; dan proporsi pemakaman terdiri atas: paling sedikit 70% (tujuh puluh persen) tutupan hijau; dan sisanya berupa tutupan nonhijau ramah lingkungan.",
        },
        {
          name: "Rimba Kota",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/01.%20rimba%20kota.png",
          description:
            "Rimba Kota paling sedikit memiliki kriteria : hamparan lahan berbentuk memanjang/jalur dan/atau mengelompok sebagai tempat tumbuh vegetasi dengan stratifikasi lengkap, rapat, dan beragam di dalam Wilayah Kota atau Kawasan Perkotaan; sebagai tempat pertumbuhan berbagai jenis vegetasi dan keanekaragaman hayati; berfungsi utama sebagai ruang penyangga ekosistem alami dan membentuk kesatuan ekologis; sebagai daerah resapan air; sebagai pengendali iklim mikro; sebagai tempat aktivitas sosial masyarakat secara terbatas; membatasi perkembangan Wilayah Kota atau Kawasan Perkotaan; memiliki radius pelayanan 5.000 m (lima ribu meter); memiliki luas paling kecil 100.000 m2 (seratus ribu meter persegi); dan proporsi rimba kota terdiri atas: paling sedikit 95% (sembilan puluh lima persen) tutupan hijau; dan sisanya berupa tutupan nonhijau ramah lingkungan.",
        },
        {
          name: "Taman Kota",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/02.%20Taman%20kota.png",
          description:
            "Taman Kota paling sedikit memiliki kriteria : lahan terbuka yang berfungsi sosial budaya dan estetika sebagai sarana kegiatan rekreasi, edukasi, atau kegiatan lain yang ditujukan untuk melayani penduduk dalam 1 (satu) kota atau Kawasan Perkotaan; sebagai tempat pertumbuhan berbagai jenis vegetasi dan keanekaragaman hayati; sebagai daerah resapan air",
        },
      ],
    },
  };

  const typologyCount = Object.keys(rthTypologies).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Informasi RTH
          </h1>
          <p className="text-lg text-gray-600">
            Ruang Terbuka Hijau untuk Jakarta yang Berkelanjutan dan Ramah
            Lingkungan
          </p>
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
              <span className="text-gray-800 font-medium">Informasi RTH</span>
            </li>
          </ol>
        </nav>

        {/* Definisi RTH */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Definisi Ruang Terbuka Hijau
          </h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Berdasarkan <strong>UU Cipta Kerja No. 11 Tahun 2020</strong>,
              Ruang Terbuka Hijau (RTH) adalah area memanjang/jalur dan atau
              mengelompok, yang penggunaannya lebih bersifat terbuka, tempat
              tumbuh tanaman, baik yang tumbuh secara alamiah maupun yang
              sengaja ditanam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">30%</h3>
              <p className="text-gray-600">Target RTH Jakarta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">20%</h3>
              <p className="text-gray-600">RTH Publik</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10%</h3>
              <p className="text-gray-600">RTH Privat</p>
            </div>
          </div>
        </div>

        {/* Kontribusi Masyarakat */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kontribusi Masyarakat dalam RTH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bangunan Atap */}
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => onNavigate("rth-atap")}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bangunan Atap
                </h3>
                <p className="text-gray-600 mb-4">
                  Pemanfaatan atap bangunan untuk green roof dan urban farming
                </p>
                <div className="inline-flex items-center text-blue-600 font-medium">
                  Pelajari Lebih Lanjut
                  <svg
                    className="w-4 h-4 ml-1"
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

            {/* Pekarangan */}
            <div
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => onNavigate("rth-pekarangan")}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pekarangan
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimalisasi pekarangan rumah untuk tanaman produktif dan hias
                </p>
                <div className="inline-flex items-center text-green-600 font-medium">
                  Pelajari Lebih Lanjut
                  <svg
                    className="w-4 h-4 ml-1"
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

            {/* Lingkungan */}
            <div
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => onNavigate("rth-lingkungan")}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,19H5V3H13V9H19V19Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Lingkungan
                </h3>
                <p className="text-gray-600 mb-4">
                  Pengembangan RTH skala lingkungan dan komunitas
                </p>
                <div className="inline-flex items-center text-purple-600 font-medium">
                  Pelajari Lebih Lanjut
                  <svg
                    className="w-4 h-4 ml-1"
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
          </div>
        </div>

        {/* Komunitas Hijau */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Komunitas Hijau Jakarta
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Bergabunglah dengan komunitas hijau Jakarta untuk berkontribusi
            dalam pengembangan RTH
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://www.instagram.com/ayoketaman/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 text-center">
                Ayo Ke Taman
              </h4>
            </a>

            <a
              href="https://www.instagram.com/temantaman.jkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 text-center">
                Teman Taman
              </h4>
            </a>

            <a
              href="https://www.instagram.com/sobatair.jkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 text-center">
                Sobat Air
              </h4>
            </a>

            <a
              href="https://www.instagram.com/jktberkebun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 text-center">
                Jakarta Berkebun
              </h4>
            </a>
          </div>
        </div>

        {/* Tipologi RTH */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tipologi Ruang Terbuka Hijau
          </h2>

          <div
            className={`${typologyCount > 3 ? "flex gap-6 mb-8 overflow-x-auto pb-4" : "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"}`}
          >
            {Object.entries(rthTypologies).map(([key, typology]) => (
              <button
                key={key}
                onClick={() =>
                  setSelectedTypology(selectedTypology === key ? null : key)
                }
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${typologyCount > 3 ? "min-w-80 flex-shrink-0" : ""} ${
                  selectedTypology === key
                    ? "border-green-500 bg-green-50 shadow-lg"
                    : "border-gray-200 hover:border-green-300 hover:bg-green-25"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Tipologi {key.toUpperCase()}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedTypology === key ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600">{typology.description}</p>
              </button>
            ))}
          </div>

          {/* Display Selected Typology Content */}
          {selectedTypology && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {rthTypologies[selectedTypology].title}
              </h3>
              <p className="text-lg text-gray-700 text-center mb-8">
                {rthTypologies[selectedTypology].description}
              </p>

              <div className="space-y-8">
                {rthTypologies[selectedTypology].types.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border p-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                      <div>
                        <img
                          src={type.image}
                          alt={type.name}
                          className="w-full h-auto max-h-64 object-contain rounded-lg shadow-md bg-gray-50"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          {index + 1}. {type.name}
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-justify">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => onNavigate(`rth-typology-${selectedTypology}`)}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium inline-flex items-center"
                >
                  Lihat Detail Lengkap
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
          )}
        </div>
      </div>
    </div>
  );
};

export default RTHInfoPage;
