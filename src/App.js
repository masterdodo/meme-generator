import './App.css';
import './components/Header.css';
import Header from './components/Header';
import './components/MemeInput.css';
import Meme from './components/Meme';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState);
  }

  return (
    <div className="App" style={{backgroundColor: darkMode ? "#333" : "#FFF"}}>
      <Header handleToggle={toggleDarkMode} darkMode={darkMode}/>
      <Meme darkMode={darkMode}/>
    </div>
  );
}

export default App;
