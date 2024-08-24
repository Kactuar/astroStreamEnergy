import React, {useEffect} from 'react';
import './App.css';
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div className="App">
        header
        <Header/>
        button
        <Button/>
    </div>
  );
}

export default App;
