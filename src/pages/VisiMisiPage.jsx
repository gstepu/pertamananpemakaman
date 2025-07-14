import { ArrowLeft, Target, Compass } from "lucide-react";

const VisiMisiPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("LandingPage")}
              className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Beranda</span>
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
            <span className="text-gray-700">Tentang Kami</span>
            <span>/</span>
            <span className="text-green-700 font-medium">Visi & Misi</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Visi & Misi
            </h1>
            <p className="text-lg text-gray-600">
              Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta
            </p>
          </div>

          {/* Visi Section */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Visi</h2>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <p className="text-lg text-gray-800 font-medium leading-relaxed text-center">
                "Ruang Terbuka Hijau Jakarta yang Nyaman, Maju, Lestari dan
                Terjangkau bagi warga"
              </p>
              <p className="text-sm text-gray-600 text-center mt-2">
                (berdasarkan RENSTRA 2017 – 2022)
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 font-medium mb-4">
                Adapun pemahaman terhadap visi tersebut adalah sebagai berikut:
              </p>

              <div className="grid gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Ruang Terbuka Hijau adalah:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Area memanjang/jalur dan atau mengelompok, yang
                    penggunaannya lebih bersifat terbuka, tempat tumbuh tanaman,
                    baik tanaman yang tumbuh secara alamiah maupun yang sengaja
                    ditanam (Permen PU No.5/PRT/M/2008)
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Ruang Terbuka Hijau yang Nyaman bagi warga kota adalah:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Suatu kondisi yang menimbulkan rasa segar, sejuk dan enak
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Ruang Terbuka Hijau yang Maju bagi warga kota adalah:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Memiliki arti menjadi lebih baik atau berkembang. Hal ini
                    menunjukkan adanya progres untuk mencapai tingkat yang lebih
                    baik dari sebelumnya, terutama dicirikan oleh semakin
                    meningkatnya kualitas pelayanan publik dan meningkatnya
                    kualitas kehidupan masyarakat.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Ruang Terbuka Hijau yang Lestari bagi warga kota adalah:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Menurut Kamus Besar Bahasa Indonesia, arti kata "lestari"
                    adalah tetap seperti keadaan semula, tidak berubah, bertahan
                    dan kekal. Para ahli ekologi telah menganjurkan pergesaran
                    dari pembangunan yang ramah lingkungan (dampak negatif
                    sekecil mungkin atau nol), menjadi memulihkan lingkungan,
                    sebab bukan hanya mengurangi kerusakan yang merupakan dampak
                    dari pembangunan, tetapi juga perlunya memperbaiki
                    lingkungan untuk mencapai kembali keadaan kapasitasnya
                    seperti semula.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Ruang Terbuka Hijau yang Terjangkau bagi warga kota adalah:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Menurut Kamus Besar Bahasa Indonesia, arti kata "terjangkau"
                    adalah tercapai, sehingga diharapkan RTH di Jakarta adalah
                    RTH yang terhubung dan dekat dengan tempat tinggal dan
                    pusat-pusat aktivitas sehingga mudah dicapai oleh seluruh
                    warga kota serta memudahkan keterlibatan dan peran serta
                    masyarakat terhadap pengembangan Ruang Terbuka tersebut.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misi Section */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Compass className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Misi</h2>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Menyediakan Ruang Terbuka Hijau Hutan, Taman dan Pemakaman
                  yang nyaman sebagai ruang aktivitas dan kreativitas publik;
                </p>
              </div>

              <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Meningkatkan Pelayanan dan peran serta masyarakat di Bidang
                  Kehutanan, Pertamanan dan Pemakaman dalam penyediaan dan
                  pengelolaan Ruang Terbuka Hijau;
                </p>
              </div>

              <div className="flex gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Mewujudkan konservasi flora dan fauna yang memperkuat daya
                  dukung lingkungan.
                </p>
              </div>

              <div className="flex gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Meningkatkan tata kelola organisasi Dinas Kehutanan yang
                  berorientasi pada pelayanan publik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiPage;
