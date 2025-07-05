"use client";

import { useState } from "react";

const Header = ({ onNavigate }) => {
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

        {/* Desktop Navigation */}
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
          {/* Login Button for Desktop */}
          <a
            href="#login"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition duration-200 font-medium"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("login");
            }}
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
        } md:hidden px-6 pb-4 border-t border-gray-200`}
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
        {/* Login Button for Mobile */}
        <a
          href="#login"
          className="block mt-3 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition duration-200 font-medium text-center"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("login");
          }}
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
