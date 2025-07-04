import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Profil", href: "#" },
    { name: "Layanan", href: "#" },
    { name: "Berita", href: "#" },
    { name: "Regulasi", href: "#" },
    { name: "Kontak", href: "#" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/40x40/004a26/ffffff?text=DKI"
            alt="Logo DKI"
            className="h-10"
          />
          <span className="text-lg font-bold text-gray-800">
            Distamhut DKI Jakarta
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-green-800 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars fa-lg"></i>
        </button>
      </nav>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden px-6 pb-4`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block py-2 text-gray-600 hover:text-green-800"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
