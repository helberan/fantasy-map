import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Map } from './pages/map/Map';
import { Location } from './pages/locations/Location';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="Main">
          <Routes>
            <Route path="/" element={<Map />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
