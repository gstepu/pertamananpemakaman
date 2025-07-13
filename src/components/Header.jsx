"use client";

import { useState } from "react";

const Header = ({ onNavigate, isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#", action: "LandingPage" },
    { name: "Profil", href: "#" },
    {
      name: "Layanan",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Cek Data Makam", href: "#", action: "cemetery-search" },
        {
          name: "Ketersediaan Lahan Makam",
          href: "#",
          action: "cemetery-availability",
        },
        { name: "Informasi Retribusi", href: "#" },
        { name: "Izin Pemakaman", href: "#" },
        {
          name: "E-Book Panduan Teknis Pekerjaan Lanskap (E-PATELA)",
          href: "/files/ebook.pdf",
          target: "_blank",
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
      name: "Berita dan Informasi",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Berita", href: "#", action: "news" },
        { name: "Informasi RTH", href: "#", action: "rth-info" },
      ],
    },
    { name: "Regulasi", href: "#", action: "regulation" },
    { name: "Tentang Kami", href: "#" /* Belum ada action */ },
  ];

  const handleLinkClick = (e, action) => {
    if (action) {
      e.preventDefault();
      onNavigate(action);
    }
    setServicesDropdownOpen(false);
    setNewsDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleLogoutClick = () => {
    onLogout();
    setProfileDropdownOpen(false);
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

          {!isLoggedIn ? (
            <a
              href="#login"
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition duration-200 font-medium"
              onClick={(e) => handleLinkClick(e, "login")}
            >
              Login
            </a>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      onClick={(e) => handleLinkClick(e, "account-profile")}
                    >
                      Profil
                    </a>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
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
        {!isLoggedIn ? (
          <a
            href="#login"
            className="block mt-3 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition duration-200 font-medium text-center"
            onClick={(e) => handleLinkClick(e, "login")}
          >
            Login
          </a>
        ) : (
          <div className="pt-2 mt-2 border-t border-gray-200">
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-green-800"
              onClick={(e) => handleLinkClick(e, "account-profile")}
            >
              Profil
            </a>
            <button
              onClick={handleLogoutClick}
              className="block w-full text-left py-2 text-gray-600 hover:text-green-800"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
