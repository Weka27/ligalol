import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          ClassicCore League
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Deine Nostalgie-Liga für Spiele wie Counter-Strike 1.6, Warcraft 3 & Co.
          <br />
          Fordere andere heraus, steig in der Ladder auf & dominiere die Rankings!
        </p>
      </header>

      <main className="space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
          Jetzt registrieren
        </button>
        <button className="bg-transparent border border-blue-600 hover:bg-blue-600 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
          Mehr erfahren
        </button>
      </main>

      <footer className="mt-24 text-gray-600 text-sm">
        © 2025 ClassicCore League. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
