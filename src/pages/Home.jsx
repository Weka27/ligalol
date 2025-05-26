// src/pages/Home.jsx
import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Home() {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">ClassicCore League</h1>
      {user ? (
        <>
          <p className="mb-4">Hallo, {user.email}</p>
          <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">Du bist nicht eingeloggt.</p>
        </>
      )}
    </div>
  );
}
