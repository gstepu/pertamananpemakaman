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
import RTHTypologyDetailPage from "./pages/RTHTypologyDetailPage";
import RTHAtapPage from "./pages/RTHAtapPage";
import RTHPekaranganPage from "./pages/RTHPekaranganPage";
import RTHLingkunganPage from "./pages/RTHLingkunganPage";
import RegulationDetailPage from "./pages/RegulationDetailPage";
import TreePruningApplicationPage from "./pages/TreePruningApplicationPage";
import SeedlingApplicationPage from "./pages/SeedlingApplication";
import TreeFallClaimPage from "./pages/TreeFallClaimPage";
import AccountProfilePage from "./pages/AccountProfilePage";
import CemeteryDataSearchPage from "./pages/CemeteryPlotApplication";
import CemeteryAvailabilityPage from "./pages/CemeteryAvailabilityPage";
import StrukturOrganisasiPage from "./pages/StrukturOrganisasiPage";
import VisiMisiPage from "./pages/VisiMisiPage";
import TugasFungsiPage from "./pages/TugasFungsiPage";
import SejarahPage from "./pages/SejarahPage";

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
  const [currentPage, setCurrentPage] = useState("LandingPage");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (page, message = "") => {
    setCurrentPage(page);
    if (message) {
      setNotificationMessage(message);
    }
  };

  const handleLoginSuccess = (message) => {
    setIsLoggedIn(true);
    setNotificationMessage(message);
    setCurrentPage("LandingPage");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNotificationMessage("Anda telah berhasil log out.");
    setCurrentPage("LandingPage");
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "LandingPage":
        return <LandingPage onNavigate={handleNavigate} />;
      case "login":
        return (
          <LoginPage
            onNavigate={handleNavigate}
            onLoginSuccess={handleLoginSuccess}
          />
        );
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
      case "rth-atap":
        return <RTHAtapPage onNavigate={handleNavigate} />;
      case "rth-pekarangan":
        return <RTHPekaranganPage onNavigate={handleNavigate} />;
      case "rth-lingkungan":
        return <RTHLingkunganPage onNavigate={handleNavigate} />;
      case "tree-application":
        return <TreePruningApplicationPage onNavigate={handleNavigate} />;
      case "seedling-application":
        return <SeedlingApplicationPage onNavigate={handleNavigate} />;
      case "account-profile":
        return <AccountProfilePage onNavigate={handleNavigate} />;
      case "tree-fall-claim":
        return <TreeFallClaimPage onNavigate={handleNavigate} />;
      case "cemetery-search":
        return <CemeteryDataSearchPage onNavigate={handleNavigate} />;
      case "cemetery-availability":
        return <CemeteryAvailabilityPage onNavigate={handleNavigate} />;
      case "struktur-organisasi":
        return <StrukturOrganisasiPage onNavigate={handleNavigate} />;
      case "visi-misi":
        return <VisiMisiPage onNavigate={handleNavigate} />;
      case "tugas-fungsi":
        return <TugasFungsiPage onNavigate={handleNavigate} />;
      case "sejarah":
        return <SejarahPage onNavigate={handleNavigate} />;
      default:
        // Handle dynamic routes like news-detail-1, news-detail-2, etc.
        if (currentPage.startsWith("news-detail-")) {
          const newsId = currentPage.split("-")[2];
          return <NewsDetailPage onNavigate={handleNavigate} newsId={newsId} />;
        }
        // Handle RTH detail routes
        if (currentPage.startsWith("rth-detail-")) {
          const articleId = currentPage.split("-")[2];
          return (
            <RTHDetailPage onNavigate={handleNavigate} articleId={articleId} />
          );
        }
        // Handle RTH typology detail routes
        if (currentPage.startsWith("rth-typology-")) {
          const typology = currentPage.split("-")[2];
          return (
            <RTHTypologyDetailPage
              onNavigate={handleNavigate}
              typology={typology}
            />
          );
        }
        // Handle regulation detail routes
        if (currentPage.startsWith("regulasi-")) {
          const type = currentPage.replace("regulasi-", "");
          return (
            <RegulationDetailPage onNavigate={handleNavigate} type={type} />
          );
        }
        // Halaman default jika state tidak cocok
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Notification
        message={notificationMessage}
        onClear={() => setNotificationMessage("")}
      />

      <Header
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <main className="flex-1">{renderPageContent()}</main>

      <Footer />
    </div>
  );
}
