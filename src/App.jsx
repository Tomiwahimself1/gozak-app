import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import { BRAND } from "./lib/brand";
import { AppCtx } from "./context/AppContext";
import { GlobalStyle } from "./components/GlobalStyle";
import { Navbar } from "./components/Navbar";
import { Footer, WhatsAppFloat } from "./components/Footer";
import { SignInModal, AppointmentModal } from "./components/Modals";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PharmacyPage from "./pages/PharmacyPage";
import MallPage from "./pages/MallPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from './pages/AdminPage';

const PAGE_COMPONENTS = {
  home: HomePage,
  about: AboutPage,
  pharmacy: PharmacyPage,
  mall: MallPage,
  contact: ContactPage,
  admin: AdminPage,
};

export default function App() {
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("gozak_active_page");
    return savedPage && savedPage !== "admin" && savedPage !== "service" ? savedPage : "home";
  });

  const [signInOpen, setSignInOpen] = useState(false);
  const [apptOpen, setApptOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("gozak_active_page", page);
  }, [page]);

  const ctx = { page, setPage, setSignInOpen, setApptOpen };
  const PageComponent = PAGE_COMPONENTS[page] || HomePage;

  return (
    <AppCtx.Provider value={ctx}>
      <div style={{ background: BRAND.cream, fontFamily: "Inter, sans-serif" }} className="min-h-screen">
        <GlobalStyle />
        <Navbar />
        <PageComponent />
        <Footer />
        <WhatsAppFloat />
        <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
        <AppointmentModal open={apptOpen} onClose={() => setApptOpen(false)} />
      </div>
    </AppCtx.Provider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);