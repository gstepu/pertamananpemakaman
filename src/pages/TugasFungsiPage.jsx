import { ArrowLeft, CheckCircle, Settings, FileText } from "lucide-react";

const TugasFungsiPage = ({ onNavigate }) => {
  const fungsiList = [
    "Penyusunan pelaksanaan rencana kerja dan anggaran Dinas Kehutanan;",
    "Perumusan kebijakan teknis pelaksanaan pengelolaan pertamanan dan pemakaman;",
    "Pembangunan taman, jalur hijau, pemakaman dan keindahan kota;",
    "Penataan, pemeliharaan dan perawatan taman, jalur hijau, keindahan kota dan makam;",
    "Pengawasan dan pengendalian pemanfaatan makam, taman, jalur hijau, dan keindahan kota;",
    "Pelayanan, pembinaan dan pengendalian rekomendasi, perizinan, standarisasi dan / atau sertifikasi di bidang pertamanan dan pemakaman;",
    "Pengembangan peran serta masyarakat dibidang pertamanan dan pemakaman;",
    "Penyediaan tanah makam, pemetakan tanah makam, dan tata keindahan taman pemakaman umum;",
    "Pelayanan, perawatan/pengurusan, pengangkutan dan pemakaman jenazah termasuk jenazah orang terlantar;",
    "Penyelenggaraan penggalian dan atau pemindahan jenazah",
    "Pemungutan, penatausahaan, penyetoran, dan pertanggungjawaban penerimaan retribusi pertamanan dan pemakaman;",
    "Penegakan peraturan perundang-undangan di bidang pertamanan dan pemakaman.",
    "Penyediaan, penatausahaan, penggunaan, pemeliharaan dan perawatan prasarana dan sarana pertamanan dan pemakaman;",
    "Pemberian dukungan teknis kepada masyarakat dan perangkat daerah;",
    "Pengelolaan kepegawaian, keuangan, barang, dan ketatausahaan Dinas Kehutanan;",
    "Pelaporan, dan pertanggungjawaban pelaksanaan tugas dan fungsi.",
  ];

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
            <span className="text-green-700 font-medium">Tugas & Fungsi</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Tugas & Fungsi
            </h1>
            <p className="text-lg text-gray-600">
              Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta
            </p>
          </div>

          {/* Tugas Pokok Section */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Tugas Pokok</h2>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 font-medium leading-relaxed">
                Melaksanakan Pengelolaan Pertamanan dan Pemakaman
              </p>
              <p className="text-sm text-gray-600 mt-2">Renstra 2013-2017</p>
            </div>
          </div>

          {/* Fungsi Section */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Settings className="w-6 h-6 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Fungsi</h2>
            </div>

            <div className="space-y-4">
              {fungsiList.map((fungsi, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 leading-relaxed">{fungsi}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border p-6">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Informasi Tambahan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tugas dan fungsi ini ditetapkan berdasarkan peraturan
                  perundang-undangan yang berlaku dan disesuaikan dengan
                  kebutuhan pelayanan publik di bidang pertamanan dan pemakaman
                  di Provinsi DKI Jakarta. Pelaksanaan tugas dan fungsi ini
                  bertujuan untuk meningkatkan kualitas hidup masyarakat melalui
                  penyediaan ruang terbuka hijau yang berkualitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TugasFungsiPage;
