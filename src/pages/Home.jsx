import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">🎮 ClassicCore League</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Willkommen bei der <strong>ClassicCore League</strong> – deiner Anlaufstelle für echte Nostalgiker!
          Erlebe die glorreichen Zeiten von <em>Counter-Strike 1.6</em>, <em>Warcraft 3</em>, 
          <em>CoD 4</em> und anderen Klassikern. Spiele in Ladders, fordere andere heraus 
          und messe dich in einem modernen, automatisierten Liga-System. Ohne Schnickschnack. Einfach Gaming, wie früher.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/10/header.jpg"
              alt="Counter-Strike 1.6"
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Counter-Strike 1.6</h3>
          </div>
          <div>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/2100/header.jpg"
              alt="Warcraft 3"
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Warcraft III</h3>
          </div>
          <div>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/7940/header.jpg"
              alt="Call of Duty 4"
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">Call of Duty 4</h3>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">🚀 Jetzt einsteigen</h2>
          <p className="text-gray-300 mb-4">
            Melde dich kostenlos an, finde ein Team oder tritt einer bestehenden Gruppe bei. 
            Fordere andere Teams heraus, sammle Punkte im Ladder-System und arbeite dich an die Spitze.
          </p>
          <a
            href="/register"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold"
          >
            Jetzt registrieren
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
