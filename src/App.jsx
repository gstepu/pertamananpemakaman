"use client";

import "./index.css";
import { useState } from "react";

// Import komponen layout yang dipakai bersama
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
// Import CatalogPage
import CatalogPage from "./pages/CatalogPage";

// App.jsx sekarang berfungsi sebagai "Layout Shell" atau kerangka utama
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage onNavigate={setCurrentPage} />;
      case "register":
        return <RegisterPage onNavigate={setCurrentPage} />;
      case "forgot-password":
        return <ForgotPasswordPage onNavigate={setCurrentPage} />;
      case "park-schedule":
        return <ParkSchedulePage onNavigate={setCurrentPage} />;
      case "park-application":
        return <ParkApplicationPage onNavigate={setCurrentPage} />;
      case "map":
        return <MapPage onNavigate={setCurrentPage} />;
      case "catalog":
        return <CatalogPage onNavigate={setCurrentPage} />;
      default:
        return (
          <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header onNavigate={setCurrentPage} />
            <main className="flex-1">
              <LandingPage onNavigate={setCurrentPage} />
            </main>
            <Footer />
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
}
