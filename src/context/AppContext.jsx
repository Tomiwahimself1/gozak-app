import { createContext, useContext } from "react";

export const AppCtx = createContext(null);
export const useApp = () => useContext(AppCtx);

export const PAGES = ["home", "about", "pharmacy", "mall", "contact"];

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "pharmacy", label: "Pharmacy" },
  { id: "bakery", label: "Bakery" }, // 👈 Added here!
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];