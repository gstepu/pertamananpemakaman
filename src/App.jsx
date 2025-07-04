import "./index.css";

import React from "react";

// Import komponen layout yang dipakai bersama
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import halaman yang ingin ditampilkan
import LandingPage from "./pages/LandingPage";

// App.jsx sekarang berfungsi sebagai "Layout Shell" atau kerangka utama
export default function App() {
  return (
    <div className="bg-gray-50">
      <Header />

      {/* Di sini kita memanggil komponen halaman */}
      <LandingPage />

      <Footer />
    </div>
  );
}

// Catatan: Nantinya jika Anda menggunakan routing (misal: React Router),
// bagian <LandingPage /> akan diganti dengan komponen <Routes> untuk
// menampilkan halaman yang berbeda berdasarkan URL.
