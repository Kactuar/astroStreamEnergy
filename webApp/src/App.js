import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
      return tg.close();
    }

  return (
    <div className="App">
        dataInit
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
