import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/favourite' element={<Favourite/>}/>
    </Routes>
  );
}

export default App;
