"use client";

import "./index.css";
import { useState, useEffect } from "react"; // 1. Import useEffect

// Import komponen layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import halaman-halaman
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ParkSchedulePage from "./pages/ParkSchedulePage";
import ParkApplicationPage from "./pages/ParkApplicationPage";
import MapPage from "./pages/MapPage";
import CatalogPage from "./pages/CatalogPage";

// 2. BUAT KOMPONEN NOTIFIKASI BARU
// Komponen ini akan tampil di atas semua halaman lain
const Notification = ({ message, onClear }) => {
  useEffect(() => {
    // Sembunyikan notifikasi setelah 3 detik
    if (message) {
      const timer = setTimeout(() => {
        onClear();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClear]);

  if (!message) return null;

  return (
    // --- PERUBAHAN DI SINI ---
    // Naikkan z-index agar notifikasi muncul di atas header
    <div className="fixed top-5 right-5 z-[100] bg-green-600 text-white py-2 px-5 rounded-lg shadow-lg animate-fade-in-down">
      {message}
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  // 3. Tambah state untuk notifikasi
  const [notificationMessage, setNotificationMessage] = useState("");

  // 4. Buat fungsi navigasi baru yang bisa membawa pesan notifikasi
  const handleNavigate = (page, message = "") => {
    setCurrentPage(page);
    if (message) {
      setNotificationMessage(message);
    }
  };

  const renderPage = () => {
    // 5. Ganti semua `onNavigate={setCurrentPage}` menjadi `onNavigate={handleNavigate}`
    switch (currentPage) {
      case "login":
        return <LoginPage onNavigate={handleNavigate} />;
      case "register":
        return <RegisterPage onNavigate={handleNavigate} />;
      case "forgot-password":
        return <ForgotPasswordPage onNavigate={handleNavigate} />;
      case "park-schedule":
        return <ParkSchedulePage onNavigate={handleNavigate} />;
      case "park-application":
        return <ParkApplicationPage onNavigate={handleNavigate} />;
      case "map":
        return <MapPage onNavigate={handleNavigate} />;
      case "catalog":
        return <CatalogPage onNavigate={handleNavigate} />;
      default:
        return (
          <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header onNavigate={handleNavigate} />
            <main className="flex-1">
              <LandingPage onNavigate={handleNavigate} />
            </main>
            <Footer />
          </div>
        );
    }
  };

  return (
    <div>
      {/* 6. Render komponen Notifikasi di sini */}
      <Notification
        message={notificationMessage}
        onClear={() => setNotificationMessage("")}
      />
      {renderPage()}
    </div>
  );
}
