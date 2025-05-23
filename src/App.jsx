import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// importiere weitere Seiten hier

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* andere Routes hier */}
      </Routes>
    </Router>
  );
}
