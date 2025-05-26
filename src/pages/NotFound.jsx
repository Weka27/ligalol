// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6">Seite nicht gefunden.</p>
      <Link to="/" className="text-blue-400 underline">Zurück zur Startseite</Link>
    </div>
  );
}
