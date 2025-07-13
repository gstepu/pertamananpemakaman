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
import TreePruningApplicationPage from "./pages/TreePruningApplicationPage";
import SeedlingApplicationPage from "./pages/SeedlingApplication";
import TreeFallClaimPage from "./pages/TreeFallClaimPage";
import AccountProfilePage from "./pages/AccountProfilePage";
import CemeteryDataSearchPage from "./pages/CemeteryPlotApplication";
import CemeteryAvailabilityPage from "./pages/CemeteryAvailabilityPage";

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
      default:
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
