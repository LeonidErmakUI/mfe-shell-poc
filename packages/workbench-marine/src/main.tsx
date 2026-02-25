import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WorkbenchApp from "./WorkbenchApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WorkbenchApp basePath="/marine" lobSlug="marine" />
  </StrictMode>,
);
