import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';
import PokeGrid from './PokeGrid';

export default function SearchBar() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  
  const [img, setImg] = useState('');

  const [type, setType] = useState([]);
  var arr = [];

  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  


  const notFound = ()=>{
    return <h1>notFound</h1>
  }

  // const handleClick = ()=>{
  //   const promises = [];
  //   if(input){
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${input}`).then(res=>res.json()).then(result => {
  //       if(`https://pokeapi.co/api/v2/pokemon/${input}`){
  //         promises.push(result);
	// 	    setResults(result);
	// 	    // console.log(`https://pokeapi.co/api/v2/pokemon/${input}` === true);
  //       setImg(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
  //         result.id < 10
  //           ? '00' + result.id
  //           : result.id < 100
  //           ? '0' + result.id
  //           : +result.id
  //       }.png`)
  //       Object.values(result)[16].map((e)=>{
  //         arr.push(e.type.name)
  //         setType(arr);
  //       })
  //       }
  //       else{
  //         console.log("erroe");
  //       }
      
	// 	}).catch((err)=>{return<h1>Not FOund</h1>})
    
  //   }
  // }

  useEffect(() => {
		const fetchPokemon = () => {
			const promises = [];
			// for (let i = 1; i <= 100; i++) {
				const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
				promises.push(fetch(url).then((res) => res.json()));
			// }
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
		// console.log(pokemon);
		fetchPokemon();
	}, [input]);

  // https://img.pokemondb.net/artwork/avif/raichu.avif



  // console.log(type);

  // var type = Object.values(results)[16].map((type) => type.type.name) 
  
  
  // Object.values(results)[16].map((e)=>
  //   // setType(e.type.name);
  //   console.log(e.type.name)
  // )

  // console.log(results.value);
  // if(results != undefined){
  //   console.log("Helli");
    
  // }
  

  // if(results!==undefined && results.length !==0) {
  //   return <PokeCard name={results[0].name} type={results[0].type} img={results[0].image}/>
  // }

  

  // console.log(Object.values(results)[16][1].type.name);

  return (
    <div>
      <input onChange={handleChange} value={input}/>
      {/* {notFound()} */}
      {/* {handleClick()} */}
      {
        results!==undefined && results.length !==0 ? <PokeCard name={results[0].name} type={results[0].type} img={results[0].image}/> : <h1>NULL</h1>
      }
      {/* <PokeCard name={results.name} type={type} img={img}/> */}
      {/* <button type='button' onClick={handleClick}>Search</button> */}
      <ul>
        {/* {
          results ?
          Object.values(results)[16].map((type) => 
          
             <li> {type.type.name} </li>
          ):
          '' 

        } */}

        
      </ul>
      
    </div>
  )
}
