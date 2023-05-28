import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/search' element={<SearchBar/>}/>
    </Routes>
  );
}

export default App;
