import './App.css';
import JokesList from './Components/JokesList';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Jokes List</h1>
      </header>

      <div className="content">
        <JokesList></JokesList>
      </div>

      <footer className="bottom">
      </footer>

    </div>
  );
}

export default App;