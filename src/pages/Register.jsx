import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/ladder");
    } catch (err) {
      setError("Registrierung fehlgeschlagen. Versuch es nochmal.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-800 rounded mt-8">
      <h2 className="text-2xl mb-6">Registrieren</h2>
      <form onSubmit={handleRegister} className="flex flex-col space-y-4">
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
          placeholder="Passwort (min. 6 Zeichen)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="p-2 rounded bg-gray-700"
        />
        {error && <div className="text-red-400">{error}</div>}
       
