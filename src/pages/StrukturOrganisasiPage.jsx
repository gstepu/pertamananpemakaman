import { ArrowLeft } from "lucide-react";

const StrukturOrganisasiPage = ({ onNavigate }) => {
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
            <span className="text-green-700 font-medium">
              Struktur Organisasi
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Struktur Organisasi
            </h1>
            <p className="text-lg text-gray-600">
              Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta
            </p>
          </div>

          {/* Organizational Chart */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Struktur Organisasi dan Tata Kerja (SOTK)
              </h2>
              <p className="text-gray-600">
                Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta
              </p>
            </div>

            {/* Chart Image Container */}
            <div className="flex justify-center">
              <div className="max-w-full overflow-auto">
                <img
                  src="https://pertamananpemakaman.jakarta.go.id/assets/images/v140/t102/SOTK-distamhut.jpg"
                  alt="Struktur Organisasi Dinas Pertamanan dan Hutan Kota DKI Jakarta"
                  className="max-w-full h-auto border border-gray-200 rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Download Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Untuk melihat struktur organisasi dalam resolusi yang lebih
                  tinggi, silakan klik gambar di atas atau unduh file berikut:
                </p>
                <a
                  href="https://pertamananpemakaman.jakarta.go.id/assets/images/v140/t102/SOTK-distamhut.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Unduh Struktur Organisasi
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Informasi Organisasi
              </h3>
              <div className="space-y-2">
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">Nama:</span>
                  <span className="text-gray-600">
                    Dinas Pertamanan dan Hutan Kota
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">
                    Provinsi:
                  </span>
                  <span className="text-gray-600">DKI Jakarta</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">
                    Status:
                  </span>
                  <span className="text-gray-600">
                    Organisasi Perangkat Daerah
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Kontak Informasi
              </h3>
              <div className="space-y-2">
                <div className="flex">
                  <span className="font-medium text-gray-700 w-20">
                    Alamat:
                  </span>
                  <span className="text-gray-600">
                    Jl. Kebon Sirih No. 25, Jakarta Pusat
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-20">
                    Telepon:
                  </span>
                  <span className="text-gray-600">(021) 3456789</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-20">Email:</span>
                  <span className="text-gray-600">
                    info@pertamananpemakaman.jakarta.go.id
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;
