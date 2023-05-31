import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import SearchBar from './components/SearchBar';
import Guess from './pages/Guess';
import Navbar from './components/Navbar';

import BG_VID from '../src/Videos/bg-2.mp4';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <video className='bg-video' autoPlay loop muted>
        <source src={BG_VID} type='video/mp4' />
      </video>
      <Navbar />
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/search' element={<SearchBar/>}/>
      <Route path='/guess' element={<Guess/>}/>
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
