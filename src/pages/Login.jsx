import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Login() {
  const [email,setE] = useState(""); const [pass,setP] = useState("");
  const [err,setErr] = useState(""); const nav = useNavigate();

  const handle = async e=>{
    e.preventDefault(); setErr("");
    try{ await signInWithEmailAndPassword(auth,email,pass); nav("/dashboard"); }
    catch(ex){ setErr("Falsche Daten."); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handle} className="bg-gray-800 p-8 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {err && <div className="text-red-500 mb-2">{err}</div>}
        <input className="w-full p-2 mb-3 bg-gray-700 rounded" placeholder="E-Mail"
               onChange={e=>setE(e.target.value)} value={email} required />
        <input className="w-full p-2 mb-5 bg-gray-700 rounded" type="password" placeholder="Passwort"
               onChange={e=>setP(e.target.value)} value={pass} required />
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded">Einloggen</button>
        <p className="mt-3 text-center text-sm">Kein Account? <Link to="/register" className="underline">Registrieren</Link></p>
      </form>
    </div>
  );
}
