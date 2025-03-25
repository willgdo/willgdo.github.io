import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
