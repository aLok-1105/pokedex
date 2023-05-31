import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';

import LOADER from '../gif/loader.gif'

export default function SearchBar() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  

  useEffect(() => {
    setLoading(true);
		const fetchPokemon = () => {
			const promises = [];
				const url = `https://pokeapi.co/api/v2/pokemon/${input.toLocaleLowerCase()}`;
				promises.push(fetch(url).then((res) => res.json()));
      var fetchedPokemon
			Promise.all(promises).then((results) => {
      setLoading(false);
    // setLoading(true);
        if(results[0].name){
          fetchedPokemon = results.map((result) => ({
            name: (result.name),
            image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
              result.id < 10
                ? '00' + result.id
                : result.id < 100
                ? '0' + result.id
                : +result.id
            }.png`,
            type: result.types
              .map((type) => type.type.name),
            id: result.id,
          }));
          console.log(fetchedPokemon);
				  setResults(fetchedPokemon);
          setLoading(false);
        }
        else{
          setResults()
        }

			});
		};
		fetchPokemon();
    setLoading(true);
	}, [input]);

  // https://img.pokemondb.net/artwork/avif/raichu.avif


  return (
    <>
    <div className='search-home'>
					<img className='search-icon' src='https://media3.giphy.com/media/XwENvq9FeAr7zd3QD8/giphy.gif?cid=6c09b952c5vao29fbygy41nsb40q5okchseey4q0jcj823nn&ep=v1_stickers_related&rid=giphy.gif&ct=s' alt='pokeball'/>
					<input
						className='home-search-bar'
						type='text'
						value={input}
						onChange={handleChange} 
						placeholder='Search by Name or No'
					/>
		</div>
    {
      !loading ?
      <div className='search-cont'>
      
      {/* <input onChange={handleChange} value={input} className='home-search-bar position-relative'/> */}
      {
        results!==undefined && results.length !==0 ? <PokeCard className='position-relative' name={results[0].name} type={results[0].type} img={results[0].image}/> : <h1>NULL</h1>
      }
    </div>
    :
            <div className='loader-cont'>
                <img src={LOADER} alt='Loading...' style={{width: '50px'}}/>
            </div>
    }
    </>
  )
}
