import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';

export default function SearchBar() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  

  useEffect(() => {
		const fetchPokemon = () => {
			const promises = [];
				const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
				promises.push(fetch(url).then((res) => res.json()));
      var fetchedPokemon
			Promise.all(promises).then((results) => {
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
        }
        else{
          setResults()
        }

			});
		};
		fetchPokemon();
	}, [input]);

  // https://img.pokemondb.net/artwork/avif/raichu.avif


  return (
    <div>

      <input onChange={handleChange} value={input}/>
      {
        results!==undefined && results.length !==0 ? <PokeCard name={results[0].name} type={results[0].type} img={results[0].image}/> : <h1>NULL</h1>
      }
            
      
    </div>
  )
}
