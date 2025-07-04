import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4">Distamhut DKI Jakarta</h4>
          <p className="text-gray-400 text-sm">
            Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta. Jl. K.S. Tubun
            No.1, Petamburan, Jakarta Pusat.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Tautan Cepat</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Profil
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Visi & Misi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Struktur Organisasi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                PPID
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <i className="fas fa-phone-alt mr-2"></i> (021) 53672283
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i> distamhut@jakarta.go.id
            </li>
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i> Jl. Aipda K.S.
              Tubun No.1
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Media Sosial</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>
          &copy; 2025 Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
