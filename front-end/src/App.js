// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css';
import BrasiliaMap from './components/BrasiliaMap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BrasiliaMap/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
