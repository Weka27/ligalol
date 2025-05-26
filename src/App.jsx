// App.jsx (oder z.B. AuthProvider.jsx, wenn du modular arbeitest)
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // deine Firebase-Konfiguration
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  return (
    <>
      {user ? (
        <p>Hallo, {user.email}</p>
      ) : (
        <p>Du bist nicht eingeloggt</p>
      )}
    </>
  );
}
