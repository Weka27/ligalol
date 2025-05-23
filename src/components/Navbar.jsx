import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-400">ClassicCore League</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        {user ? (
          <>
            <Link to="/ladder" className="hover:text-blue-300">Ladder</Link>
            <button onClick={logout} className="hover:text-blue-300">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
            <Link to="/register" className="hover:text-blue-300">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
