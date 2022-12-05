// import logo from './logo.svg';
import TruckMap from './components/TruckMap';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TruckMap/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
