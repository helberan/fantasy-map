import './App.css';
import { Map } from './Map';
import { Filter } from './Filter';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Map</h1>
        <Filter />
      </header>
      <div className="content-container">
        <Map />
        <div>
          <p>Detail</p>
        </div>
      </div>
    </div>
  );
}

export default App;
