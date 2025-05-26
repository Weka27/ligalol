// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">ClassicCore League</h1>
      <p className="mb-4">
        Willkommen zur Liga für echte Nostalgiker – CS 1.6, WC3, Medal of Honor und mehr.
        Erlebe die alten Zeiten neu – jetzt mit Ladder-System, Rankings und Community!
      </p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Login
        </Link>
        <Link to="/register" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
          Registrieren
        </Link>
      </div>
    </div>
  );
}
