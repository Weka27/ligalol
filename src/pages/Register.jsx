// src/pages/Register.jsx
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Registrierung fehlgeschlagen: " + err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registrieren</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input name="email" type="email" placeholder="E-Mail" className="w-full p-2 bg-gray-800" required />
        <input name="password" type="password" placeholder="Passwort" className="w-full p-2 bg-gray-800" required />
        <button className="w-full bg-green-600 hover:bg-green-700 p-2">Registrieren</button>
      </form>
    </div>
  );
}
