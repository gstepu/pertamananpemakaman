const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://placehold.co/40x40/ffffff/047857?text=DKI"
                alt="Logo DKI"
                className="h-10"
              />
              <span className="text-xl font-bold">
                Dinas Pertamanan dan Hutan Kota DKI Jakarta
              </span>
            </div>
            <p className="text-green-100 mb-4">
              Melayani masyarakat DKI Jakarta dalam pengelolaan ruang terbuka
              hijau dan penyediaan layanan digital untuk kemudahan akses
              informasi dan pengajuan pemakaian fasilitas taman.
            </p>
          </div>

          {/* Menu Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Digital</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition"
                >
                  Jadwal Acara Taman
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition"
                >
                  Pengajuan Pemakaian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition"
                >
                  Informasi Retribusi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition"
                >
                  Peta Lokasi Taman
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-2 text-green-100">
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                Jl. Gunung Sahari Raya No. 2, Jakarta Pusat
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (021) 4204531
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                pertamanan@jakarta.go.id
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p className="text-green-100">
            © {new Date().getFullYear()} Dinas Pertamanan dan Hutan Kota DKI
            Jakarta. Seluruh Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
