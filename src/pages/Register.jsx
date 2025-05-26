import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Automatisch einloggen
      await signInWithEmailAndPassword(auth, email, password);

      // Weiterleitung
      navigate("/dashboard"); // Oder /home etc.
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Registrieren</button>
    </form>
  );
}
