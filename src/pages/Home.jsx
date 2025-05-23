import React from "react";

const games = [
  {
    name: "Counter-Strike 1.6",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5d/Counter-Strike_1.6_cover.jpg",
    description: "Der Klassiker unter den Taktik-Shootern, der eSports geprägt hat.",
  },
  {
    name: "Warcraft 3",
    img: "https://upload.wikimedia.org/wikipedia/en/7/74/Warcraft_III_Reign_of_Chaos_cover.jpg",
    description: "Strategie-Perle mit epischen Schlachten und eigener Modding-Szene.",
  },
  {
    name: "Medal of Honor: Allied Assault",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9e/Medal_of_Honor_Allied_Assault_Coverart.png",
    description: "Legendärer WWII-Shooter mit packender Kampagne und Multiplayer.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold mb-4">ClassicCore League</h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Deine Nostalgie-Liga für Klassiker wie CS 1.6, Warcraft 3, Medal of Honor und mehr. 
          Fordere andere heraus, kämpfe dich nach oben und werde Legende!
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {games.map((game) => (
          <div
            key={game.name}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
              <p className="text-gray-300">{game.description}</p>
            </div>
          </div>
        ))}
      </main>

      <div className="text-center space-x-6">
        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
          Zur Ladder
        </button>
        <button className="bg-transparent border border-blue-600 hover:bg-blue-600 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
          Registrieren
        </button>
      </div>

      <footer className="mt-24 text-gray-600 text-center text-sm">
        © 2025 ClassicCore League. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
