/*  src/App.jsx  */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* --- Seiten/Komponenten --- */
import Home    from "./pages/Home.jsx";       // deine ESL-Startseite
import Ladder  from "./pages/Ladder.jsx";     // TODO: bauen
import Login   from "./pages/Login.jsx";      // TODO: bauen
import Register from "./pages/Register.jsx";  // TODO: bauen
import NotFound from "./pages/NotFound.jsx";  // Fallback-404

/* --- (Optional) globale Styles oder Tailwind-Import, falls du
       NICHT den CDN-Weg nutzt:  */
// import "./index.css";

function App() {
  return (
    <Router>
      {/*  Hier könntest du später eine globale Navbar einbinden  */}
      {/*  <Navbar />  */}

      <Routes>
        {/* Startseite im alten ESL-Look */}
        <Route path="/" element={<Home />} />

        {/* Weitere (noch leere) Seiten */}
        <Route path="/ladder"    element={<Ladder    />} />
        <Route path="/login"     element={<Login     />} />
        <Route path="/register"  element={<Register  />} />

        {/* 404-Fallback – immer ganz unten lassen */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
