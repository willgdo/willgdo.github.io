import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
// import { Perfil } from "../pages/Perfil";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      {/* <Route path="/about" index element={<Perfil />} /> */}
      {/* <Route path="/education" index element={<Home />} />
      <Route path="/experience" index element={<Home />} />
      <Route path="/contact" index element={<Home />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
