// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Login fehlgeschlagen: " + err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="email" type="email" placeholder="E-Mail" className="w-full p-2 bg-gray-800" required />
        <input name="password" type="password" placeholder="Passwort" className="w-full p-2 bg-gray-800" required />
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2">Login</button>
      </form>
    </div>
  );
}
