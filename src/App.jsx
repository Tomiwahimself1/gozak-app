import React, { useState } from "react";
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
import SupermarketPage from "./pages/SupermarketPage";
import MallPage from "./pages/MallPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AdminPage from './pages/AdminPage';

const PAGE_COMPONENTS = {
  home: HomePage,
  about: AboutPage,
  pharmacy: PharmacyPage,
  supermarket: SupermarketPage,
  mall: MallPage,
  service: ServicePage,
  contact: ContactPage,
  admin: AdminPage,
};

export default function App() {
  const [page, setPage] = useState("admin");
  const [signInOpen, setSignInOpen] = useState(false);
  const [apptOpen, setApptOpen] = useState(false);

  const ctx = { page, setPage, setSignInOpen, setApptOpen };
  const PageComponent = PAGE_COMPONENTS[page];

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



// Find the root div in your index.html and mount the App component
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);