import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-gray-100 font-sans">
      <header className="bg-[#101010] border-b border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">ClassicCore League</h1>
          <nav className="space-x-4 text-sm uppercase">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/ladder" className="hover:text-blue-400">Ladder</a>
            <a href="/matches" className="hover:text-blue-400">Matches</a>
            <a href="/register" className="hover:text-blue-400">Join</a>
            <a href="/login" className="hover:text-blue-400">Login</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">Willkommen Nostalgiker!</h2>
            <p className="text-gray-300 mb-4">
              Du vermisst die alten Tage der ESL? Clanwars um 18:00 Uhr, TeamSpeak Chaos und die gute alte
              Ladder-Tabelle? Wir bringen dir das ESL-Feeling zurück – mit <strong>CS 1.6</strong>, 
              <strong>Warcraft III</strong>, <strong>CoD 4</strong> und mehr!
            </p>
            <p className="text-gray-400 mb-6">
              Gründet ein Team, fordert Gegner heraus, sammelt Punkte und kämpft euch an die Spitze.
              Kein Matchmaking, kein Pay2Win – nur ehrliches Gaming. Genau wie damals.
            </p>
            <a
              href="/register"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold transition"
            >
              Jetzt anmelden
            </a>
          </div>

          <div className="bg-[#222] p-4 rounded shadow border border-gray-700">
            <h3 className="text-xl font-bold border-b border-gray-600 mb-3 pb-2">Top Ladder Games</h3>
            <ul className="space-y-2 text-sm">
              <li>🎯 Counter-Strike 1.6</li>
              <li>⚔️ Warcraft III: TFT</li>
              <li>🪖 Medal of Honor: AA</li>
              <li>🚀 Unreal Tournament 2004</li>
              <li>💣 Call of Duty 4</li>
            </ul>
          </div>
        </div>

        <section className="bg-[#2a2a2a] p-6 rounded border border-gray-700">
          <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">Letzte Matches</h3>
          <table className="w-full text-sm table-auto">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="py-2">Match</th>
                <th className="py-2">Score</th>
                <th className="py-2">Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#333]">
                <td className="py-2">Team Alpha vs NoAim</td>
                <td className="py-2">16:13</td>
                <td className="py-2">22.05.2025</td>
              </tr>
              <tr className="hover:bg-[#333]">
                <td className="py-2">ClanX vs NightRaiders</td>
                <td className="py-2">2:0</td>
                <td className="py-2">21.05.2025</td>
              </tr>
              <tr className="hover:bg-[#333]">
                <td className="py-2">EliteSquad vs CSKings</td>
                <td className="py-2">14:16</td>
                <td className="py-2">20.05.2025</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-600 py-6 border-t border-gray-700 bg-[#101010]">
        © 2025 ClassicCore League – inspired by the old ESL glory days.
      </footer>
    </div>
  );
};

export default Home;
