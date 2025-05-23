import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Hier kannst du später weitere Routen hinzufügen, z.B. /login, /register */}
      </Routes>
    </Router>
  );
}

export default App;
