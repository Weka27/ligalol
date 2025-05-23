// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          ClassicCore League
        </h1>
        <p className="max-w-xl mb-8 text-lg text-gray-300 drop-shadow-md">
          Die nostalgische Online-Liga für Counter-Strike 1.6, Warcraft 3 & mehr!
          Tritt gegen echte Gegner an, kämpfe in Ladder und Turnieren und werde
          Champion der alten Schule.
        </p>
        <div className="space-x-4">
          <a
            href="/register"
            className="inline-block px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Jetzt registrieren
          </a>
          <a
            href="/ladder"
            className="inline-block px-6 py-3 border border-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Ladder anschauen
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon="⚙️"
            title="Automatische Elo-Wertung"
            description="Unser Ladder-System passt deine Wertung nach jedem Match automatisch an."
          />
          <FeatureCard
            icon="🏆"
            title="Turniere & Ladder"
            description="Nimm an spannenden Turnieren teil oder steigere dich in der Ladder."
          />
          <FeatureCard
            icon="🛡️"
            title="Anti-Cheat & Fairplay"
            description="Wir setzen auf Fairness – mit Maßnahmen gegen Cheater und Betrüger."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2025 ClassicCore League — Built with ❤️ for Nostalgie-Fans
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-default">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
