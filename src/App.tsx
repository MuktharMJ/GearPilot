import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Compare from './pages/Compare';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
