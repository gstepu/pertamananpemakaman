"use client";

import { useState } from "react";

const Header = ({ onNavigate, isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState("Beranda");

  const toggleSubmenu = (name) => {
    setExpandedSubmenu((prev) => (prev === name ? null : name));
  };

  const navLinks = [
    { name: "Beranda", href: "#", action: "LandingPage" },
    { name: "Profil", href: "#" },
    {
      name: "Layanan",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Informasi Pemakaman",
          children: [
            { name: "Cek Data Makam", href: "#", action: "cemetery-search" },
            { name: "Ketersediaan Petak Makam", href: "#", action: "cemetery-availability" },
            { name: "Penanganan Jenazah Terlantar", href: "#", action: "burial-permit" },
          ],
        },
        {
          name: "Pertamanan dan Kehutanan",
          children: [
            { name: "Jadwal Penggunaan Taman", href: "#", action: "park-schedule" },
            { name: "Profil Kelompok Tani Hutan (KTH)", href: "#", action: "Kthprofile" },
            { name: "Katalog Produk KTH", href: "#", action: "catalog" },
            {
              name: "E-Book Panduan Teknis Pekerjaan Lanskap (E-PATELA)",
              href: "/files/ebook.pdf",
              target: "_blank",
            },
          ],
        },
        {
          name: "Permohonan",
          children: [
            { name: "Permohonan Izin Penggunaan Taman", href: "#", action: "park-schedule" },
            { name: "Permohonan Bibit Tanaman", href: "#", action: "seedling-application" },
            { name: "Permohonan Pemangkasan Pohon", href: "#", action: "tree-application" },
            { name: "Santunan Pohon Tumbang", href: "#", action: "tree-fall-claim" },
          ],
        },
        { name: "Peta TPU & RTH", href: "#", action: "map" },
      ],
    },
    {
      name: "Berita dan Informasi",
      hasDropdown: true,
      dropdownItems: [
        { name: "Berita", href: "#" },
        { name: "Informasi", href: "#" },
      ],
    },
    { name: "Dasar Hukum", href: "#" },
    {
      name: "Tentang Kami",
      hasDropdown: true,
      dropdownItems: [
        { name: "Struktur Organisasi", href: "#" },
        { name: "Visi & Misi", href: "#" },
        { name: "Kontak", href: "#" },
      ],
    },

  ];

  const handleLinkClick = (e, action) => {
    if (action) {
      e.preventDefault();
      onNavigate(action);
      setActiveMenu("Layanan");
    }
    setServicesDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleTopNavClick = (e, name, action) => {
    if (action) {
      e.preventDefault();
      onNavigate(action);
    }
    setActiveMenu(name);
    setServicesDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleLogoutClick = () => {
    onLogout();
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="max-w-screen-xl w-full mx-auto px-8 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Logo DKI" className="h-10" />
          <span className="text-base font-semibold text-gray-800">
            Dinas Pertamanan dan Hutan Kota DKI Jakarta
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div className="relative">
                  <button
                    className={`text-sm transition flex items-center ${
                      activeMenu === link.name ? "text-green-800 font-semibold" : "text-gray-600 hover:text-green-800"
                    }`}
                    onClick={() => {
                      setOpenDropdown((prev) => (prev === link.name ? null : link.name));
                      setActiveMenu(link.name);
                    }}
                  >
                    {link.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2 min-w-max">
                      {link.dropdownItems.map((item) =>
                        item.children ? (
                          <div key={item.name} className="px-4">
                            <button
                              onClick={() => toggleSubmenu(item.name)}
                              className="flex justify-between items-center w-full text-left text-sm text-gray-700 hover:text-green-700 py-2"
                            >
                              {item.name}
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  expandedSubmenu === item.name ? "rotate-90" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            {expandedSubmenu === item.name && (
                              <div className="pl-4 pb-2">
                                {item.children.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    className="block py-1 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded px-2"
                                    onClick={(e) => handleLinkClick(e, sub.action)}
                                    target={sub.target}
                                    rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                            onClick={(e) => handleLinkClick(e, item.action)}
                          >
                            {item.name}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className={`text-sm transition ${
                    activeMenu === link.name ? "text-green-800 font-semibold" : "text-gray-600 hover:text-green-800"
                  }`}
                  onClick={(e) => handleTopNavClick(e, link.name, link.action)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}

          {!isLoggedIn ? (
            <a
              href="#login"
              className="bg-green-700 hover:bg-green-800 text-white px-3 py-1.5 rounded-md text-sm font-medium"
              onClick={(e) => handleLinkClick(e, "login")}
            >
              Login
            </a>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-green-700 text-white hover:bg-green-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                      onClick={(e) => handleLinkClick(e, "account-profile")}
                    >
                      Profil
                    </a>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`$
          {isMobileMenuOpen ? "block" : "hidden"
        } md:hidden px-6 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm`}
      >
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.hasDropdown ? (
              <div>
                <button
                  className={`block w-full text-left py-2 ${
                    activeMenu === link.name ? "text-green-800 font-semibold" : "text-gray-600 hover:text-green-800"
                  }`}
                  onClick={() => {
                    setOpenDropdown((prev) => (prev === link.name ? null : link.name));
                    setActiveMenu(link.name);
                  }}
                >
                  {link.name}
                </button>
                {openDropdown === link.name && (
                  <div className="pl-4 space-y-2 mt-1">
                    {link.dropdownItems.map((item) =>
                      item.children ? (
                        <div key={item.name}>
                          <button
                            onClick={() => toggleSubmenu(item.name)}
                            className="w-full text-left py-1 text-sm font-medium text-gray-700 hover:text-green-700"
                          >
                            {item.name}
                          </button>
                          {expandedSubmenu === item.name && (
                            <div className="pl-4">
                              {item.children.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  className="block py-1 text-sm text-gray-600 hover:text-green-700"
                                  onClick={(e) => handleLinkClick(e, sub.action)}
                                  target={sub.target}
                                  rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-1 text-sm text-gray-600 hover:text-green-700"
                          onClick={(e) => handleLinkClick(e, item.action)}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={link.href}
                className={`text-sm block py-2 ${
                  activeMenu === link.name ? "text-green-800 font-semibold" : "text-gray-600 hover:text-green-800"
                }`}
                onClick={(e) => handleTopNavClick(e, link.name, link.action)}
              >
                {link.name}
              </a>
            )}
          </div>
        ))}

        {!isLoggedIn ? (
          <a
            href="#login"
            className="block mt-3 bg-green-700 hover:bg-green-800 text-white px-3 py-1.5 text-sm rounded-lg text-center"
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