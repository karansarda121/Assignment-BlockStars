import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HeadTail from './pages/HeadTail';

function App() {
  return (
    <div className="p-4 font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/head-tail" element={<HeadTail />} />
      </Routes>
    </div>
  );
}

export default App;
