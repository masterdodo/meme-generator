import './App.css';
import './components/Header.css';
import Header from './components/Header';
import './components/MemeInput.css';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
