"use client";

import { useState } from "react";

const Header = ({ onNavigate }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#", action: "LandingPage" },
    { name: "Profil", href: "#" /* Belum ada action */ },
    {
      name: "Layanan",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Cek Data Makam", href: "#" /* Belum ada action */ },
        { name: "Informasi Retribusi", href: "#" /* Belum ada action */ },
        { name: "Izin Pemakaman", href: "#" /* Belum ada action */ },
        { name: "Profil KTH", href: "#", action: "Kthprofile" },
        { name: "Katalog Produk", href: "#", action: "catalog" },
        { name: "Peta TPU & RTH", href: "#", action: "map" },
        { name: "Jadwal Acara Taman", href: "#", action: "park-schedule" },
        {
          name: "Permohonan Pemangkasan Pohon",
          href: "#",
          action: "tree-application",
        },
        {
          name: "Permohonan Bibit Tanaman",
          href: "#",
          action: "seedling-application",
        },
      ],
    },
    { name: "Berita", href: "#" /* Belum ada action */ },
    { name: "Regulasi", href: "#" /* Belum ada action */ },
    { name: "Kontak", href: "#" /* Belum ada action */ },
  ];

  // Fungsi umum untuk menangani semua klik navigasi
  const handleLinkClick = (e, action) => {
    e.preventDefault(); // Mencegah browser berpindah ke '#'
    if (action) {
      onNavigate(action);
    }
    // Tutup semua menu setelah navigasi
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo DKI" className="h-10" />
          <span className="text-lg font-bold text-gray-800">
            Dinas Pertamanan dan Hutan Kota DKI Jakarta
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div className="relative">
                  <button
                    className="text-gray-600 hover:text-green-800 transition flex items-center"
                    onClick={() =>
                      setServicesDropdownOpen(!isServicesDropdownOpen)
                    }
                  >
                    {link.name}
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                      <div className="py-2">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                            // --- PERBAIKAN DI SINI ---
                            // Gunakan handleLinkClick yang sudah ada
                            onClick={(e) => handleLinkClick(e, item.action)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-green-800 transition"
                  // --- PERBAIKAN DI SINI ---
                  // Tambahkan onClick ke semua link navigasi
                  onClick={(e) => handleLinkClick(e, link.action)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
          {/* Login Button for Desktop */}
          <a
            href="#login"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition duration-200 font-medium"
            // --- PERBAIKAN DI SINI ---
            // Gunakan juga handleLinkClick agar konsisten
            onClick={(e) => handleLinkClick(e, "login")}
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden px-6 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm`}
      >
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.hasDropdown ? (
              <div>
                <button
                  className="block w-full text-left py-2 text-gray-600 hover:text-green-800"
                  onClick={() =>
                    setServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                >
                  {link.name}
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-gray-500 hover:text-green-800"
                        // --- PERBAIKAN DI SINI ---
                        // Gunakan handleLinkClick di menu mobile juga
                        onClick={(e) => handleLinkClick(e, item.action)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={link.href}
                className="block py-2 text-gray-600 hover:text-green-800"
                // --- PERBAIKAN DI SINI ---
                // Tambahkan onClick di menu mobile juga
                onClick={(e) => handleLinkClick(e, link.action)}
              >
                {link.name}
              </a>
            )}
          </div>
        ))}
        {/* Login Button for Mobile */}
        <a
          href="#login"
          className="block mt-3 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition duration-200 font-medium text-center"
          // --- PERBAIKAN DI SINI ---
          // Gunakan handleLinkClick agar konsisten
          onClick={(e) => handleLinkClick(e, "login")}
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
