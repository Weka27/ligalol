// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar({ user }) {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">Classic League</Link>
      <div className="space-x-4">
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Registrieren</Link>}
        {user && <button onClick={() => signOut(auth)}>Logout</button>}
      </div>
    </nav>
  );
}
