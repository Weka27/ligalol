import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Willkommen bei ClassicCore League</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Du vermisst die alten Gaming-Zeiten? Counter-Strike 1.6, Warcraft 3, Call of Duty 4 oder Medal of Honor: Allied Assault waren deine Klassiker?
          Dann bist du hier genau richtig! ✨
        </p>
        <p className="text-md md:text-lg mb-10 text-gray-400">
          ClassicCore ist die E-Sports-Liga für echte Nostalgiker. Spiele im <span className="text-green-400 font-semibold">Ladder-System</span>,
          fordere Teams heraus, sammle Punkte und klettere die Rangliste hoch – alles im Stil der 2000er.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <img className="rounded-xl shadow-md" src="https://upload.wikimedia.org/wikipedia/en/4/45/Counter-Strike_1.6_cover.png" alt="CS 1.6" />
          <img className="rounded-xl shadow-md" src="https://upload.wikimedia.org/wikipedia/en/1/1e/Warcraft3_Cover.jpg" alt="Warcraft 3" />
          <img className="rounded-xl shadow-md" src="https://upload.wikimedia.org/wikipedia/en/2/28/Call_of_Duty_4_Modern_Warfare.jpg" alt="CoD 4" />
        </div>
        <a
          href="/register"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl text-lg font-bold shadow-lg transition duration-300"
        >
          Jetzt kostenlos registrieren & loslegen
        </a>
      </div>
    </div>
  );
};

export default Home;
