import { createContext, useContext } from "react";

export const AppCtx = createContext(null);
export const useApp = () => useContext(AppCtx);

export const PAGES = ["home", "about", "pharmacy", "mall", "service", "contact"];

export const NAV_ITEMS = [
  { id: "pharmacy", label: "Pharmacy" },
  { id: "mall", label: "Shopping Mall" },
  { id: "service", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];