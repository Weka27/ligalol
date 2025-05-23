import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';  // falls du schon hast
// ... andere imports

function App() {
  return (
    <Router>
      {/* Optional Navbar hier */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* weitere Routen */}
      </Routes>
    </Router>
  );
}

export default App;
