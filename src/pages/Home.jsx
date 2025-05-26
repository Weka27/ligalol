import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#1b1b1b] text-gray-100 p-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6 text-center">
        ClassicCore League
      </h1>

      <p className="max-w-2xl mx-auto text-center text-lg text-gray-300 mb-10">
        Die Online-Liga für Nostalgiker – CS 1.6, Warcraft 3, CoD4 u. v. m.<br/>
        Spiele Ladder-Matches wie zu alten ESL-Zeiten, steige im Ranking auf und
        werde Legende!
      </p>

      {!user && (
        <div className="flex justify-center gap-6">
          <Link to="/login" className="bg-blue-600 px-6 py-3 rounded shadow hover:bg-blue-700">
            Login
          </Link>
          <Link to="/register" className="bg-green-600 px-6 py-3 rounded shadow hover:bg-green-700">
            Registrieren
          </Link>
        </div>
      )}

      <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
        {[
          ["Counter-Strike 1.6","https://cdn.cloudflare.steamstatic.com/steam/apps/10/header.jpg"],
          ["Warcraft III","https://cdn.cloudflare.steamstatic.com/steam/apps/2100/header.jpg"],
          ["CoD 4","https://cdn.cloudflare.steamstatic.com/steam/apps/7940/header.jpg"]
        ].map(([title,src])=>(
          <div key={title} className="bg-[#242424] rounded shadow-lg overflow-hidden">
            <img src={src} alt={title} className="w-full h-40 object-cover" />
            <div className="p-3 text-center font-semibold">{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
