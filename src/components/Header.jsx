"use client";

import { useState } from "react";

const Header = ({ onNavigate }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setNewsDropdownOpen] = useState(false);

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
        {
          name: "E-Book Panduan Teknis Pekerjaan Lanskap (E-PATELA)",
          href: "/files/ebook.pdf", // Arahkan langsung ke file PDF di folder public
          target: "_blank", // Agar terbuka di tab baru
        },
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
        {
          name: "Santunan Pohon Tumbang",
          href: "#",
          action: "tree-fall-claim",
        },
      ],
    },
    {
      name: "Berita",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Berita dan Informasi", href: "#", action: "news" },
        { name: "Informasi RTH", href: "#", action: "rth-info" },
      ],
    },
    { name: "Regulasi", href: "#", action: "regulation" },
    { name: "Kontak", href: "#" /* Belum ada action */ },
  ];

  // --- FUNGSI DIMODIFIKASI ---
  // Fungsi ini sekarang hanya mencegah aksi default jika ada 'action' untuk navigasi SPA.
  // Jika tidak, link akan berfungsi seperti biasa.
  const handleLinkClick = (e, action) => {
    if (action) {
      e.preventDefault(); // Mencegah navigasi default HANYA jika ini adalah aksi SPA
      onNavigate(action);
    }
    // Jika tidak ada 'action', biarkan browser menangani href secara alami.

    // Tutup semua menu setelah navigasi atau klik
    setServicesDropdownOpen(false);
    setNewsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Fungsi untuk toggle dropdown dengan menutup yang lain
  const toggleDropdown = (dropdownType) => {
    if (dropdownType === "services") {
      setServicesDropdownOpen(!isServicesDropdownOpen);
      setNewsDropdownOpen(false); // Tutup dropdown berita
    } else if (dropdownType === "news") {
      setNewsDropdownOpen(!isNewsDropdownOpen);
      setServicesDropdownOpen(false); // Tutup dropdown layanan
    }
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
                      toggleDropdown(
                        link.name === "Layanan" ? "services" : "news",
                      )
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
                  {((link.name === "Layanan" && isServicesDropdownOpen) ||
                    (link.name === "Berita" && isNewsDropdownOpen)) && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                      <div className="py-2">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                            onClick={(e) => handleLinkClick(e, item.action)}
                            // --- TAMBAHAN ATRIBUT ---
                            target={item.target}
                            rel={
                              item.target === "_blank"
                                ? "noopener noreferrer"
                                : undefined
                            }
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
                    toggleDropdown(
                      link.name === "Layanan" ? "services" : "news",
                    )
                  }
                >
                  {link.name}
                </button>
                {((link.name === "Layanan" && isServicesDropdownOpen) ||
                  (link.name === "Berita" && isNewsDropdownOpen)) && (
                  <div className="pl-4 space-y-1">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-gray-500 hover:text-green-800"
                        onClick={(e) => handleLinkClick(e, item.action)}
                        // --- TAMBAHAN ATRIBUT ---
                        target={item.target}
                        rel={
                          item.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
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
          onClick={(e) => handleLinkClick(e, "login")}
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
