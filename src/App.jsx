import logo from './logo.svg';
import './App.scss';
import { useTelegram } from '@hooks/useTelegram';
import { useEffect } from 'react';

function App() {

  const { tg, user, onClose } = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {user?.username}
        </a>
        <button onClick={onClose}>Закрыть</button>
      </header>
    </div>
  );
}

export default App;
