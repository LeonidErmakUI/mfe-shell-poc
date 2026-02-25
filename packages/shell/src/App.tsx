import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthenticatedApp from "./components/AuthenticatedApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lob/*" element={<AuthenticatedApp />} />
        <Route
          path="*"
          element={<Navigate to="/marine/submissions" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
