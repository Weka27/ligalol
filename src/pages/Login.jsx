import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/ladder");
    } catch (err) {
      setError("Login fehlgeschlagen. Überprüfe deine Eingaben.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-800 rounded mt-8">
      <h2 className="text-2xl mb-6">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded bg-gray-700"
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 rounded bg-gray-700"
        />
        {error && <div className="text-red-400">{error}</div>}
        <button type="submit" className="bg-blue-600 p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
