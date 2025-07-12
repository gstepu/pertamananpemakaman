import { useState, useEffect } from "react";

const RTHTypologyDetailPage = ({ onNavigate, typology }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Data tipologi RTH
  const rthTypologies = {
    a: {
      title: "Tipologi A - Taman Kota",
      images: [
        "/images/taman-menteng.jpg",
        "/images/taman-suropati.jpg",
        "/images/taman-langsat.jpg",
      ],
      description:
        "Taman kota yang berfungsi sebagai ruang publik untuk rekreasi dan interaksi sosial",
      detailDescription: `
        <p>Taman kota merupakan ruang terbuka hijau yang dirancang khusus untuk memenuhi kebutuhan rekreasi, interaksi sosial, dan peningkatan kualitas lingkungan perkotaan. Taman kota memiliki karakteristik sebagai berikut:</p>
        
        <h3>Fungsi Utama:</h3>
        <ul>
          <li>Ruang rekreasi dan olahraga untuk masyarakat</li>
          <li>Area interaksi sosial dan kegiatan komunitas</li>
          <li>Penyerap polutan udara dan penurun suhu</li>
          <li>Konservasi air dan pencegahan erosi</li>
          <li>Habitat flora dan fauna urban</li>
        </ul>
        
        <h3>Komponen Taman Kota:</h3>
        <ul>
          <li>Area hijau dengan pepohonan rindang</li>
          <li>Jalur pedestrian dan jogging track</li>
          <li>Fasilitas bermain anak</li>
          <li>Area olahraga (lapangan basket, sepak bola, dll)</li>
          <li>Gazebo dan area istirahat</li>
          <li>Toilet dan fasilitas pendukung</li>
        </ul>
        
        <h3>Manfaat Ekologis:</h3>
        <ul>
          <li>Menyerap CO2 dan menghasilkan O2</li>
          <li>Menurunkan suhu udara melalui evapotranspirasi</li>
          <li>Menyerap air hujan dan mengurangi runoff</li>
          <li>Menyediakan habitat untuk burung dan serangga</li>
        </ul>
      `,
    },
    b: {
      title: "Tipologi B - Jalur Hijau",
      images: [
        "/images/jalur-hijau-1.jpg",
        "/images/jalur-hijau-2.jpg",
        "/images/jalur-hijau-3.jpg",
      ],
      description:
        "Jalur hijau sepanjang jalan yang berfungsi sebagai penyerap polusi dan estetika kota",
      detailDescription: `
        <p>Jalur hijau adalah ruang terbuka hijau yang berbentuk memanjang/jalur yang berfungsi sebagai peneduh, penyerap polutan, dan penambah keindahan kota. Jalur hijau memiliki karakteristik sebagai berikut:</p>
        
        <h3>Jenis Jalur Hijau:</h3>
        <ul>
          <li>Median jalan dengan tanaman hias dan pohon peneduh</li>
          <li>Jalur hijau tepi jalan (sidewalk)</li>
          <li>Jalur hijau bantaran sungai</li>
          <li>Jalur hijau di bawah flyover dan jembatan</li>
          <li>Koridor hijau penghubung antar taman</li>
        </ul>
        
        <h3>Fungsi Utama:</h3>
        <ul>
          <li>Penyerap polutan udara dari kendaraan bermotor</li>
          <li>Peneduh alami untuk pejalan kaki dan pengendara</li>
          <li>Peredam kebisingan lalu lintas</li>
          <li>Pembatas visual antar jalur lalu lintas</li>
          <li>Penambah estetika dan keindahan kota</li>
        </ul>
        
        <h3>Tanaman yang Digunakan:</h3>
        <ul>
          <li>Pohon peneduh: Angsana, Mahoni, Trembesi</li>
          <li>Tanaman hias: Bougenvil, Pucuk Merah, Palm</li>
          <li>Rumput: Rumput Gajah Mini, Zoysia</li>
          <li>Tanaman perdu: Pandan Variegata, Dracaena</li>
        </ul>
        
        <h3>Kriteria Perencanaan:</h3>
        <ul>
          <li>Pemilihan tanaman tahan polusi dan minim perawatan</li>
          <li>Sistem irigasi yang efisien</li>
          <li>Penataan yang tidak mengganggu visibilitas</li>
          <li>Integrasi dengan infrastruktur kota</li>
        </ul>
      `,
    },
    c: {
      title: "Tipologi C - Hutan Kota",
      images: [
        "/images/hutan-kota-1.jpg",
        "/images/hutan-kota-2.jpg",
        "/images/hutan-kota-3.jpg",
      ],
      description:
        "Hutan kota yang berfungsi sebagai paru-paru kota dan konservasi biodiversitas",
      detailDescription: `
        <p>Hutan kota adalah kawasan berhutan di dalam wilayah perkotaan yang berfungsi sebagai paru-paru kota, pengatur iklim mikro, dan kawasan konservasi keanekaragaman hayati. Hutan kota memiliki karakteristik sebagai berikut:</p>
        
        <h3>Karakteristik Hutan Kota:</h3>
        <ul>
          <li>Luasan minimal 0,25 hektar dengan tutupan kanopi 60%</li>
          <li>Struktur vegetasi berlapis (ground cover, shrub, understory, canopy)</li>
          <li>Keanekaragaman jenis pohon yang tinggi</li>
          <li>Memiliki ekosistem yang relatif stabil</li>
          <li>Berfungsi sebagai habitat fauna urban</li>
        </ul>
        
        <h3>Fungsi Ekologis:</h3>
        <ul>
          <li>Penyerap CO2 dalam jumlah besar</li>
          <li>Produksi oksigen untuk kualitas udara</li>
          <li>Pengatur iklim mikro dan suhu kota</li>
          <li>Konservasi air dan pencegahan banjir</li>
          <li>Habitat dan koridor satwa liar</li>
        </ul>
        
        <h3>Jenis Hutan Kota:</h3>
        <ul>
          <li>Hutan kota alami (sisa hutan asli yang dipertahankan)</li>
          <li>Hutan kota buatan (hasil penanaman dan rekayasa)</li>
          <li>Hutan kota campuran (kombinasi alami dan buatan)</li>
        </ul>
        
        <h3>Komponen Hutan Kota:</h3>
        <ul>
          <li>Zona inti untuk konservasi (akses terbatas)</li>
          <li>Zona penyangga dengan akses terkontrol</li>
          <li>Zona pemanfaatan untuk edukasi dan rekreasi</li>
          <li>Jalur interpretasi dan tracking</li>
          <li>Pusat informasi dan edukasi lingkungan</li>
        </ul>
        
        <h3>Manfaat untuk Masyarakat:</h3>
        <ul>
          <li>Tempat rekreasi dan wisata alam</li>
          <li>Laboratorium alam untuk pendidikan</li>
          <li>Ruang meditasi dan terapi alam</li>
          <li>Sumber air bersih dan udara segar</li>
        </ul>
      `,
    },
  };

  const currentTypology = rthTypologies[typology];

  if (!currentTypology) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Tipologi Tidak Ditemukan
          </h2>
          <button
            onClick={() => onNavigate("rth-info")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Kembali ke RTH Info
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
            <span className="text-gray-500 truncate">
              {currentTypology.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentTypology.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentTypology.description}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Galeri Foto
            </h2>

            {/* Main Image */}
            <div className="mb-6">
              <img
                src={currentTypology.images[currentImageIndex]}
                alt={`${currentTypology.title} ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {currentTypology.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative group ${
                    currentImageIndex === index ? "ring-4 ring-green-500" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${currentTypology.title} ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                  />
                  {currentImageIndex === index && (
                    <div className="absolute inset-0 bg-green-500 bg-opacity-20 rounded-lg"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Deskripsi Detail
            </h2>
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:mb-2"
              dangerouslySetInnerHTML={{
                __html: currentTypology.detailDescription,
              }}
            />
          </div>
        </div>

        {/* Panel Tipologi Lainnya */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tipologi RTH Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(rthTypologies).map(([key, typ]) => (
              <button
                key={key}
                onClick={() => onNavigate(`rth-typology-${key}`)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  typology === key
                    ? "border-green-500 bg-green-50 cursor-default"
                    : "border-gray-200 hover:border-green-300 hover:bg-green-25"
                }`}
                disabled={typology === key}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tipologi {key.toUpperCase()}
                </h3>
                <p className="text-gray-600 mb-4">{typ.description}</p>
                {typology !== key && (
                  <div className="inline-flex items-center text-green-600 font-medium">
                    Lihat Detail
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
                )}
                {typology === key && (
                  <div className="inline-flex items-center text-green-600 font-medium">
                    Sedang Dilihat
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHTypologyDetailPage;
