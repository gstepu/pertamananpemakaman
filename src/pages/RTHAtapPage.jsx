import { ArrowLeft, Droplets, Leaf, Home, Lightbulb } from "lucide-react";

const RTHAtapPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("rth-info")}
              className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Informasi RTH</span>
            </button>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <button
              onClick={() => onNavigate("LandingPage")}
              className="hover:text-green-700 transition-colors"
            >
              Beranda
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate("rth-info")}
              className="hover:text-green-700 transition-colors"
            >
              Informasi RTH
            </button>
            <span>/</span>
            <span className="text-green-700 font-medium">
              RTH Bangunan Atap
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8">
            <img
              src="https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/01_bangunan_kamu.png"
              alt="RTH Bangunan Atap"
              className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg bg-white"
            />
          </div>

          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              RTH Bangunan Atap
            </h1>
            <p className="text-lg text-gray-600">
              Kontribusi Anda dalam Pengelolaan Air Hujan dan Ruang Terbuka
              Hijau
            </p>
          </div>

          {/* Introduction Questions */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <Droplets className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Siapkah Bangunan Anda?
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-800 font-medium">
                    Apakah bangunan Anda sudah siap menghadapi gelombang panas
                    berikutnya?
                  </p>
                  <p className="text-gray-800 font-medium">
                    Apakah atap Anda telah dilengkapi untuk menampung air hujan?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Atap Hijau */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Atap Hijau (Roof Garden)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Jika Anda memiliki atap, ketahuilah bahwa atap hijau dapat
                memberikan kontribusi yang baik dalam menahan air hujan secara
                sementara. Atap sedum ekstensif sering digunakan pada bangunan
                eksisting karena memiliki bobot yang ringan dan biaya rendah,
                tetapi juga pada bangunan baru. Atap alam intensif memiliki
                bobot yang lebih berat dari atap sedum, lebih mahal dalam
                pembuatan, tetapi dapat menampung lebih banyak air hujan. Jika
                Anda mempertimbangkan untuk memiliki atap hijau, disarankan
                untuk berkonsultasi dengan penyedia jasa profesional.
              </p>
            </div>

            {/* Membuka Saluran Air Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Droplets className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Membuka Saluran Air Hujan
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Dengan memutuskan saluran air hujan dari bangunan atau rumah
                Anda dari sistem pembuangan air limbah, Anda dapat meringankan
                beban sistem pembuangan air limbah. Untuk membatasi kerusakan
                air, penting untuk mengalirkan air hujan dari bangunan atau
                rumah Anda. Pastikan terdapat kapasitas penyimpanan dan
                infiltrasi yang cukup, misalnya dengan kolam air hujan atau
                infiltrasi. Tentu saja, Anda juga dapat menggunakan air tersebut
                kembali.
              </p>
            </div>

            {/* Tong Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Home className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Tong Hujan (Rain Barrel)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Tong hujan adalah fasilitas penyimpanan air hujan yang paling
                sederhana dan mudah dipasang di rumah Anda. Anda dapat
                menggunakan air hujan yang terkumpul untuk menyiram tanaman di
                taman atau balkon Anda. Tempat penyimpanan air hujan tersedia
                dalam berbagai bentuk dan ukuran hingga sekitar 200 liter dan
                seringkali dilengkapi dengan keran. Disarankan untuk memberikan
                tempat penyimpanan air hujan dengan saluran air dan pasang
                penangkap dedaunan.
              </p>
            </div>

            {/* Sistem Penggunaan Air Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Sistem Penggunaan Air Hujan
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Sistem penggunaan air hujan yang jatuh di atap atau taman Anda.
                Anda dapat memanfaatkan air hujan yang bebas kapur untuk mesin
                cuci, toilet, dan taman. Sistem ini tersedia untuk penggunaan di
                dalam atau di luar ruangan. Instalasi di dalam rumah terdiri
                dari sebuah tangki, pompa, koneksi ke titik penggunaan, saluran
                air berlebih, dan fasilitas pengisi. Disarankan untuk
                berkonsultasi dengan penyedia jasa profesional terkait hal ini.
              </p>
            </div>

            {/* Dinding Hijau */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Dinding Hijau (Vertical Garden)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Dinding hijau memiliki banyak keuntungan: menampung air hujan
                dan menguapkannya kemudian. Jika tanaman pada dinding hijau
                ditanam di tanah, air hujan yang mengalir dapat meresap ke dalam
                tanah. Tanaman membuat dinding tetap sejuk di musim panas dan
                jenis tanaman evergreen akan melindungi fasadnya di musim
                dingin. Dinding hijau juga memberikan ruang bagi flora dan
                fauna.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mulai Kontribusi Anda Hari Ini
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Setiap langkah kecil dalam menerapkan RTH bangunan atap akan
                memberikan dampak positif bagi lingkungan dan kenyamanan hunian
                Anda. Konsultasikan dengan ahli untuk implementasi yang optimal.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate("rth-pekarangan")}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Jelajahi RTH Pekarangan
                </button>
                <button
                  onClick={() => onNavigate("rth-lingkungan")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Jelajahi RTH Lingkungan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHAtapPage;
