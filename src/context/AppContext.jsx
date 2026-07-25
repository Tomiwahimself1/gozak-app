import { createContext, useContext } from "react";

export const AppCtx = createContext(null);
export const useApp = () => useContext(AppCtx);

export const PAGES = ["home", "about", "pharmacy", "mall", "contact"];

export const NAV_ITEMS = [
  { id: "pharmacy", label: "Pharmacy" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];