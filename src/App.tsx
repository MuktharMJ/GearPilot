import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Compare from './pages/Compare';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
    </Routes>
  );
}
