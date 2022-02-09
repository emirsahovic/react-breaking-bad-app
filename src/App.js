import CharacterList from "./components/CharacterList/CharacterList";
import Navbar from "./components/Navbar/Navbar";
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Character from "./pages/Character/Character";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:char_id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
