import CharacterList from "./components/CharacterList/CharacterList";
import Navbar from "./components/Navbar/Navbar";
import './index.css';

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <CharacterList />
    </div>
  );
}

export default App;
