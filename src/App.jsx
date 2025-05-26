import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Home       from "./pages/Home";
import Login      from "./pages/Login";
import Register   from "./pages/Register";
import Dashboard  from "./pages/Dashboard";
import NotFound   from "./pages/NotFound";

export default function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={ user ? <Navigate to="/dashboard" /> : <Home /> } />
        <Route path="/login"    element={ user ? <Navigate to="/dashboard" /> : <Login /> } />
        <Route path="/register" element={ user ? <Navigate to="/dashboard" /> : <Register /> } />

        <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to="/" /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
