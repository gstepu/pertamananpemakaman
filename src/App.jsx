"use client";

import "./index.css";
import { useState, useEffect } from "react";

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
import KTHProfilePage from "./pages/Kthprofile";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import RegulationPage from "./pages/RegulationPage";
import RTHInfoPage from "./pages/RTHInfoPage";
import RTHDetailPage from "./pages/RTHDetailPage";
import TreePruningApplicationPage from "./pages/TreePruningApplicationPage";
import SeedlingApplicationPage from "./pages/SeedlingApplication";
import TreeFallClaimPage from "./pages/TreeFallClaimPage";

const Notification = ({ message, onClear }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClear();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClear]);

  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 z-[100] bg-green-600 text-white py-2 px-5 rounded-lg shadow-lg animate-fade-in-down">
      {message}
    </div>
  );
};

export default function App() {
  // Atur halaman default ke "LandingPage" agar konsisten
  const [currentPage, setCurrentPage] = useState("LandingPage");
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleNavigate = (page, message = "") => {
    setCurrentPage(page);
    if (message) {
      setNotificationMessage(message);
    }
  };

  // --- PERUBAHAN DI SINI ---
  // Fungsi ini sekarang hanya bertanggung jawab untuk merender *konten* halaman
  const renderPageContent = () => {
    switch (currentPage) {
      case "LandingPage":
        return <LandingPage onNavigate={handleNavigate} />;
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
      case "Kthprofile":
        return <KTHProfilePage onNavigate={handleNavigate} />;
      case "news":
        return <NewsPage onNavigate={handleNavigate} />;
      case "regulation":
        return <RegulationPage onNavigate={handleNavigate} />;
      case "rth-info":
        return <RTHInfoPage onNavigate={handleNavigate} />;
      case "tree-application":
        return <TreePruningApplicationPage onNavigate={handleNavigate} />;
      case "seedling-application":
        return <SeedlingApplicationPage onNavigate={handleNavigate} />;
      case "tree-fall-claim":
        return <TreeFallClaimPage onNavigate={handleNavigate} />;
      default:
        // Handle dynamic routes like news-detail-1, news-detail-2, etc.
        if (currentPage.startsWith("news-detail-")) {
          const newsId = currentPage.split("-")[2];
          return <NewsDetailPage onNavigate={handleNavigate} newsId={newsId} />;
        }
        // Halaman default jika state tidak cocok
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  // --- DAN PERUBAHAN DI SINI ---
  // Header dan Footer sekarang menjadi layout tetap
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Notification
        message={notificationMessage}
        onClear={() => setNotificationMessage("")}
      />

      <Header onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* Panggil fungsi untuk merender konten di sini */}
        {renderPageContent()}
      </main>

      <Footer />
    </div>
  );
}
