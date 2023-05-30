import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import SearchBar from './components/SearchBar';
import Guess from './pages/Guess';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/search' element={<SearchBar/>}/>
      <Route path='/guess' element={<Guess/>}/>
    </Routes>
    </>
    
  );
}

export default App;
