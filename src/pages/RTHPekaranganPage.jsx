import {
  ArrowLeft,
  Droplets,
  Leaf,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const RTHPekaranganPage = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/01_perkarangan_kamu.png",
      alt: "RTH Pekarangan",
    },
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/01_ilustrasi_infiltration_crate.png",
      alt: "Ilustrasi Infiltration Crate",
    },
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/02_tong_hujan.png",
      alt: "Tong Hujan",
    },
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/03_pagar_penampung_air_hujan.png",
      alt: "Pagar Penampung Air Hujan",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

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
            <span className="text-green-700 font-medium">RTH Pekarangan</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Image Gallery */}
          <div className="mb-8">
            <div className="relative">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg bg-white"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-green-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              RTH Pekarangan
            </h1>
            <p className="text-lg text-gray-600">
              Transformasi Pekarangan untuk Pengelolaan Air Hujan yang
              Berkelanjutan
            </p>
          </div>

          {/* Introduction Question */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <Droplets className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Sudahkah Perkarangan Anda Siap Menghadapi Hujan Deras
                  Berikutnya?
                </h2>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Memutuskan Sambungan Pipa Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Memutuskan Sambungan Pipa Hujan
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Dengan memutuskan sambungan pipa hujan dari bangunan atau rumah
                Anda dari saluran pembuangan, Anda dapat meringankan beban
                sistem pembuangan air. Untuk membatasi kerusakan akibat air,
                penting bagi Anda untuk mengalirkan air hujan dari bangunan atau
                rumah Anda ke tempat lain yang tepat, seperti kolam penampungan
                air hujan atau lapangan infiltrasi. Anda juga dapat mengolah
                ulang air hujan untuk keperluan lain.
              </p>
            </div>

            {/* Perkerasan Permeabel */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Perkerasan Permeabel
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kerikil atau tegel dengan celah terbuka dapat menyerap air hujan
                ke dalam tanah. Ini membuat air tidak perlu dibuang melalui
                saluran pembuangan dan tanah di bawahnya dapat secara otomatis
                terisi kembali. Ada juga kerikil dengan tonjolan di sisi yang
                memberi kesempatan air hujan untuk mengalir keluar. Perkerasan
                permeabel sering digunakan bersama dengan drainase untuk
                mencegah air tanah yang terlalu tinggi akibat hujan yang
                berkepanjangan.
              </p>
            </div>

            {/* Ketinggian Berbeda di Taman */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ketinggian Berbeda di Taman
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Di taman yang memiliki ketinggian yang berbeda, air dapat
                ditampung sementara di area yang lebih rendah tanpa mengganggu
                aktivitas. Area yang lebih tinggi akan tetap kering setelah
                hujan lebat. Saran: Buatlah area yang lebih rendah dengan jarak
                yang cukup jauh dari rumah atau bangunan Anda agar tidak terjadi
                kerusakan akibat air. Namun, pastikan bahwa tetangga Anda juga
                tidak merasa terganggu. Di area yang lebih dalam yang tidak
                diperkeras, air hujan dapat tetap berada di sana sementara waktu
                dan perlahan-lahan meresap ke dalam tanah melalui tumbuhan.
                Rumput sangat cocok untuk hal ini, namun tumbuhan lain yang
                tahan terhadap periode yang kering dan basah juga dapat
                digunakan.
              </p>
            </div>

            {/* Selokan Terbuka */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Selokan Terbuka
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Selokan terbuka adalah saluran pembuangan permukaan yang
                sederhana dan cocok untuk digunakan di taman. Air hujan dari
                permukaan yang diperkeras dan pipa hujan yang telah diputuskan
                dapat mengalir melalui selokan terbuka ke tempat penyimpanan
                atau lapangan infiltrasi yang terletak di sekitarnya, atau
                disambungkan ke saluran pembuangan melalui sumur. Selokan
                terbuka harus berada pada kemiringan yang tepat. Keuntungan
                tambahan dari selokan terbuka adalah bahwa selain dapat
                menampung air hujan, ia juga memperlihatkan dengan jelas
                bagaimana 'jalur air' mengalir setelah hujan.
              </p>
            </div>

            {/* Kolam Penampungan Air Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kolam Penampungan Air Hujan
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kolam penampungan air hujan ialah sebuah kolam yang memungkinkan
                level airnya naik, sehingga ia memiliki kapasitas tambahan untuk
                menampung air hujan secara sementara dan memperlambat alirannya.
                Vegetasi di dalam kolam dan tepian hijau sebagian memperbaiki
                kualitas air dan cocok untuk periode kering dan basah. Sebuah
                kolam dengan bagian yang memiliki kedalaman satu meter akan
                mempertahankan sebagian air tanpa tanaman. Air juga dapat
                meresap ke dalam tanah, jika sudah cukup bersih dan tanah
                memungkinkannya.
              </p>
            </div>

            {/* Mengganti Tegel dengan Tanaman Hijau */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mengganti Tegel dengan Tanaman Hijau
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Mengurangi jumlah tegel di halaman memiliki banyak manfaat. Air
                hujan dapat menyerap ke dalam tanah dan mengisi kembali sumber
                air tanah. Ini tidak perlu dibuang melalui saluran pembuangan.
                Hal ini membantu membatasi genangan air pada saat hujan lebat.
                Menghapus tegel juga memberikan lebih banyak ruang bagi flora
                dan fauna serta kehidupan tanah. Tanaman hijau juga dapat
                menjaga keamanan halaman pada hari-hari musim panas yang panas.
                Namun, mencopot tegel dapat membutuhkan banyak tenaga. Tip: Anda
                dapat menggunakan tegel untuk membuat dinding tumpukan.
              </p>
            </div>

            {/* Jalan Berkerikil */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Jalan Berkerikil
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kerikil adalah bentuk semi-pengerasan, pengerasan permukaan yang
                memungkinkan air hujan meresap ke dalam tanah dan mengisi
                kembali sumber air tanah. Hal ini membantu mengurangi genangan
                air pada saat hujan lebat. Bahan pengerasan permukaan hujan
                lainnya yang dapat digunakan adalah batu pecah, kerang, serpihan
                kayu, kulit kayu pinus, dan cangkang kakao. Bahan-bahan ini
                dapat digunakan sebagai jalan setapak atau diletakkan di sebelah
                bagian berlantai keramik untuk menyerap air dari tegel.
              </p>
            </div>

            {/* Bak Infiltrasi */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bak Infiltrasi
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Dengan menggunakan bak infiltrasi, air hujan dapat disimpan
                sementara waktu di bawah tanah dan kemudian perlahan-lahan
                diserap ke dalam tanah. Keuntungan dari penggunaan bak
                infiltrasi adalah bahwa mereka hanya memerlukan ruang di bawah
                tanah dan memberikan dua fungsi penggunaan tanah sekaligus. Tip:
                Jangan letakkan bak infiltrasi terlalu dekat dengan dinding,
                untuk mencegah genangan air di bawah tanah.
              </p>
            </div>

            {/* Atap Hijau pada Gudang Taman */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Atap Hijau pada Gudang Taman
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Jika Anda memiliki bangunan tambahan atau gudang taman, atap
                hijau dapat membantu menahan sementara air hujan. Atap sedum
                ekstensif biasanya digunakan pada gudang taman karena beratnya
                yang ringan dan biayanya yang rendah. Atap hijau intensif
                memiliki berat yang lebih tinggi daripada atap sedum, lebih
                mahal dalam pembangunannya, tetapi mampu menahan lebih banyak
                air hujan. Jika Anda mempertimbangkan untuk membuat atap hijau,
                sebaiknya konsultasikan dengan penyedia jasa profesional.
              </p>
            </div>

            {/* Tong Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tong Hujan (Rain Barrel)
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Tong hujan adalah Penyimpanan Air Hujan yang paling sederhana
                dan mudah dipasang di rumah Anda. Anda dapat memanfaatkan air
                hujan yang ditampung untuk menyiram tanaman di kebun atau balkon
                Anda. Tong hujan tersedia dalam berbagai bentuk dan ukuran
                hingga sekitar 200 liter dan biasanya dilengkapi dengan keran.
                Saran: pasanglah pembuangan berlebih pada tong hujan Anda dan
                pasang penangkap dedaunan.
              </p>
            </div>

            {/* Pagar Penampung Air Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pagar Penampung Air Hujan
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Pagar Penampung Air Hujan adalah penampungan air hujan dalam
                bentuk pagar pembatas. Tersedia dalam modul sehingga Anda dapat
                dengan mudah memperluas kapasitas penampungan air hujan. Pagar
                Penampung Air Hujan dapat dilengkapi dengan keran. Sambungkan
                Pagar Penampung Air Hujan ke saluran air hujan di atap Anda.
                Dengan begitu, Anda dapat mengurangi beban saluran pembuangan ke
                saluran pembuangan umum dan memanfaatkan air hujan pada saat
                kering untuk menyiram taman.
              </p>
            </div>

            {/* Sistem Penggunaan Air Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sistem Penggunaan Air Hujan
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Sistem penggunaan air hujan dapat menghemat air minum dan
                menampung air hujan yang jatuh di atap atau taman Anda. Anda
                dapat memanfaatkan air hujan yang bebas kapur ini untuk mesin
                cuci, toilet, dan taman secara gratis. Ada sistem yang tersedia
                untuk digunakan di dalam dan di luar rumah. Instalasi rumah
                terdiri dari sebuah tangki, pompa, sambungan ke titik
                penggunaan, pembuangan berlebih, dan penyediaan pasokan air.
                Untuk informasi lebih lanjut, konsultasikan dengan penyedia jasa
                yang profesional.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wujudkan Pekarangan Berkelanjutan
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transformasi pekarangan Anda menjadi ruang yang tidak hanya
                indah, tetapi juga berfungsi optimal dalam pengelolaan air hujan
                dan mendukung kelestarian lingkungan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate("rth-atap")}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Jelajahi RTH Atap
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

export default RTHPekaranganPage;
