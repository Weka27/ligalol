import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";  // Dein Firebase Setup

export default function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Nach Logout zurück zur Startseite
    } catch (error) {
      console.error("Logout Fehler:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">ClassicCore League</h1>
      {user ? (
        <>
          <p className="mb-4">Hallo, {user.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">Du bist nicht eingeloggt.</p>
          <a href="/login" className="underline text-blue-400">Login</a> oder{" "}
          <a href="/register" className="underline text-blue-400">Registrieren</a>
        </>
      )}
    </div>
  );
}
