import React from 'react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Classic Games League</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded shadow-lg overflow-hidden">
          <img
            src="https://www.gamersglobal.de/sites/gamersglobal.de/files/news/teaser/164/header.jpg"
            alt="Counter-Strike 1.6"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white">Counter-Strike 1.6</h2>
            <p className="text-gray-300 mt-2">Legendäres taktisches Shooter-Spiel aus 2003.</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded shadow-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0f/Warcraft_III_Reign_of_Chaos_cover.jpg"
            alt="Warcraft III"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white">Warcraft III</h2>
            <p className="text-gray-300 mt-2">Echtzeit-Strategiespiel-Klassiker von Blizzard.</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded shadow-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/2e/Medal_of_Honor_Allied_Assault_Coverart.png"
            alt="Medal of Honor Allied Assault"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white">Medal of Honor: Allied Assault</h2>
            <p className="text-gray-300 mt-2">Klassischer WW2-Shooter mit packender Story.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
