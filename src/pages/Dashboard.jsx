import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#101010] text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Eingeloggt als <span className="text-yellow-400">{user.email}</span></p>

      <div className="bg-[#1e1e1e] p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-3">Deine nächsten Schritte</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><Link to="/" className="underline">Ladder durchstöbern und Gegner finden</Link></li>
          <li>Team gründen oder beitreten</li>
          <li>Match eintragen und Punkte sammeln</li>
        </ul>
      </div>

      <button onClick={logout}
              className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
