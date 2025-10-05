import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/main.css";
import Index from "./Index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
