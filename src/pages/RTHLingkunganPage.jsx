import {
  ArrowLeft,
  Droplets,
  Leaf,
  Users,
  Shield,
  TreePine,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const RTHLingkunganPage = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const labeledImages = [
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/01_lingkungan_kamu.png",
      alt: "RTH Lingkungan",
      label: "RTH Lingkungan",
    },
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/04_water_plein.png",
      alt: "Plaza Air",
      label: "Plaza Air",
    },
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/05_Kolam_air_hujan.png",
      alt: "Kolam Air Hujan",
      label: "Kolam Air Hujan",
    },
    {
      src: "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/kontribusi_kamu/06_bioswale.png",
      alt: "Jalur Infiltrasi",
      label: "Jalur Infiltrasi",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % labeledImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + labeledImages.length) % labeledImages.length,
    );
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
            <span className="text-green-700 font-medium">RTH Lingkungan</span>
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
                src={labeledImages[currentImageIndex].src}
                alt={labeledImages[currentImageIndex].alt}
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

              {/* Image Label */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <span className="font-semibold">
                  {labeledImages[currentImageIndex].label}
                </span>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                {currentImageIndex + 1} / {labeledImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {labeledImages.map((_, index) => (
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
              RTH Lingkungan
            </h1>
            <p className="text-lg text-gray-600">
              Solusi Berkelanjutan untuk Lingkungan yang Tahan Iklim
            </p>
          </div>

          {/* Introduction Questions */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <Droplets className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Kesiapan Lingkungan Anda
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-800 font-medium">
                    Apakah lingkungan anda mampu bertahan dalam kekeringan yang
                    berkepanjangan?
                  </p>
                  <p className="text-gray-800 font-medium">
                    Sudahkah lingkungan Anda Siap Menghadapi Hujan Deras
                    Berikutnya?
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

            {/* Dinding Hijau */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <TreePine className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Dinding Hijau (Vertical Garden)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Salah satu cara yang indah dan bermanfaat adalah dengan
                menghapus sebaris tegel di sepanjang dinding rumah Anda di sisi
                jalan dan menggantinya dengan sebuah strip dinding hijau. Ini
                memungkinkan air hujan yang mengalir dari dinding untuk meresap
                ke dalam tanah. Anda juga bisa mengkombinasikan dinding hijau
                ini dengan pembuangan pipa air hujan. Namun, pastikan Anda
                memiliki fasilitas pembuangan berlebih ke permukaan air atau
                selokan. Win-win: dinding hijau memberikan pemandangan jalan
                yang lebih hijau.
              </p>
            </div>

            {/* Saluran Air Terbuka */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Saluran Air Terbuka
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Sebuah saluran terbuka adalah sistem pembuangan permukaan yang
                sederhana yang cocok untuk digunakan di taman, jalan, taman
                kota, dan lapangan. Air hujan dapat dialirkan melalui saluran
                terbuka ke fasilitas penahanan atau infiltrasi terdekat. Saluran
                terbuka harus terletak pada lereng. Keuntungan tambahan dari
                saluran terbuka adalah bahwa ia dapat membuat dampak dari hujan
                dan perjalanan air menjadi terlihat. Dan sebagai kelanjutan dari
                ini: membuat kota tahan hujan adalah suatu keharusan.
              </p>
            </div>

            {/* Lapangan Infiltrasi */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Lapangan Infiltrasi
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Pada lapangan infiltrasi, air hujan yang jatuh di atas bangunan
                atau jalan diinfiltrasi ke dalam tanah melalui jalur hijau yang
                berdekatan, seperti padang rumput. Pada masa kekeringan, air
                hujan dapat membantu mengisi kembali ketinggian air tanah.
                Dengan membuat elevasi tanah yang ringan, penyimpanan air hujan
                sementara (terbatas) dapat dimungkinkan. Infiltrasi datar
                memungkinkan jika tersedia cukup ruang dan tanah cocok untuk
                tujuan tersebut.
              </p>
            </div>

            {/* Polisi Tidur */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Polisi Tidur
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Pada saat terjadi banjir akibat hujan lebat, penempatan polisi
                tidur secara strategis dapat membantu mengarahkan air menuju
                permukaan air atau zona hijau. Air juga dapat ditahan sementara
                di jalan antara dua polisi tidur dan trotoar. Selain itu, polisi
                tidur dapat ditempatkan sehingga daerah rentan yang lebih rendah
                tidak tergenang oleh air hujan dari sekitar melalui jalan.
              </p>
            </div>

            {/* Grass Block */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Grass Block
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Anda dapat menggunakan grass block untuk memperkeras tempat
                parkir, jalan, jalan masuk garasi, dan taman yang tidak
                digunakan secara intensif agar dapat menyerap air. Hal ini
                memungkinkan air hujan untuk meresap ke dalam tanah dan mengisi
                kembali kedalaman air tanah. Persentase infiltrasi pada grass
                block dapat mencapai seratus persen tergantung pada kondisi
                tanah di bawahnya. Ini merupakan tindakan yang bagus untuk
                mencegah banjir saat Anda memiliki taman.
              </p>
            </div>

            {/* Plaza Air */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Plaza Air (Water Square)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Plaza air adalah area publik yang dibuat lebih rendah dari
                permukaan tanah sekitarnya, di mana air hujan dari sekitarnya
                mengalir ke dalam dan ditahan sementara. Fungsinya tidak hanya
                untuk menampung air hujan, tetapi juga untuk kegiatan lain
                seperti area bermain dan olahraga.
              </p>
            </div>

            {/* Peti Infiltrasi */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Peti Infiltrasi
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Anda dapat menyimpan sementara air hujan dalam tanah dan
                mengalirkannya secara perlahan ke dalam tanah dengan menggunakan
                'peti infiltrasi'. Mereka dapat digunakan di taman, lapangan
                olahraga, jalan, dan parkir. Keuntungan penggunaan peti
                infiltrasi adalah mereka hanya memakan ruang di bawah tanah dan
                menghasilkan dua kali lipat penggunaan lahan.
              </p>
            </div>

            {/* Utilitas Tahan Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Utilitas Tahan Hujan
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Di daerah yang rentan terhadap banjir, layanan dasar (pembuangan
                air limbah, data, air minum, dan energi/panas) dan komunikasi
                harus diatur sedemikian rupa sehingga tetap beroperasi 24/7 -
                bahkan selama cuaca buruk. Utilitas di atas tanah, seperti rumah
                transformator dan kotak jaringan/panel, dapat ditempatkan lebih
                tinggi di tempat-tempat yang berisiko banjir.
              </p>
            </div>

            {/* Kolam Air Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Droplets className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Kolam Air Hujan
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Kolam air hujan, tingkat airnya dapat naik sehingga memiliki
                kapasitas ekstra untuk menampung air hujan secara sementara dan
                mengalirkannya dengan lambat. Vegetasi pada pinggiran dan dalam
                kolam dapat memperbaiki kualitas air. Air juga dapat meresap
                jika sudah cukup bersih dan jika tanah memungkinkan. Ada juga
                kolam air hujan untuk penampungan dan penyaringan air yang
                tercemar yang berasal dari jalan-jalan yang ramai dilalui
                kendaraan dan tempat parkir.
              </p>
            </div>

            {/* Mencopot Pipa Pembuangan Hujan */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mencopot Pipa Pembuangan Hujan
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Dengan mencopot pipa pembuangan hujan dari bangunan atau rumah
                Anda dari saluran pembuangan air, Anda membantu mengurangi beban
                pada sistem pembuangan air. Untuk membatasi kerusakan akibat
                air, penting untuk mengarahkan air hujan dari bangunan atau
                rumah Anda ke tempat lain. Pastikan ada cukup kapasitas
                penampungan dan infiltrasi, misalnya dengan kolam penampungan
                air hujan, atau lahan infiltrasi. Anda juga dapat mendaur ulang
                air tersebut.
              </p>
            </div>

            {/* Jalur Infiltrasi */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Jalur Infiltrasi (Bioswale)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Jalur infiltrasi perkotaan cocok untuk menyimpan dan menyerap
                air hujan dari sekitar. Cara kerjanya adalah dengan mengalirkan
                air hujan dari bangunan dan jalan melalui saluran terbuka ke
                jalur infiltrasi ini. Bak-bak yang diisi kerikil, tanah, dan
                tanaman tanpa dasar menyimpan air hujan dan membiarkannya keluar
                secara perlahan ke bawah tanah. Dengan adanya tanaman, air
                bahkan sedikit disaring sebelum diserap.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bangun Lingkungan yang Berkelanjutan
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Implementasi RTH lingkungan yang tepat akan menciptakan
                ekosistem urban yang tahan terhadap perubahan iklim dan
                memberikan manfaat jangka panjang bagi komunitas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate("rth-atap")}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Jelajahi RTH Atap
                </button>
                <button
                  onClick={() => onNavigate("rth-pekarangan")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Jelajahi RTH Pekarangan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHLingkunganPage;
