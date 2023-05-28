import React, { useState } from 'react'
import PokeCard from './PokeCard';
import PokeGrid from './PokeGrid';

export default function SearchBar() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  
  const [img, setImg] = useState('');

  const [type, setType] = useState([]);
  var arr = [];

  const handleChange = (e)=>{
    const promises = [];
    setInput(e.target.value);
    if(e.target.value){
      fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`).then(res=>res.json()).then(result => {
      promises.push(result);
		    setResults(result);
		    // console.log(result);
        setImg(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
          result.id < 10
            ? '00' + result.id
            : result.id < 100
            ? '0' + result.id
            : +result.id
        }.png`)
        Object.values(result)[16].map((e)=>{
          arr.push(e.type.name)
          setType(arr);
        })
		})
    
    }
  }



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
  

  // console.log(type);

  // console.log(Object.values(results)[16][1].type.name);

  return (
    <div>
      <input onChange={handleChange} value={input}/>
      <PokeCard name={results.name} type={type} img={img}/>
      <ul>
        {/* {
          Object.values(results).map((item) => {
            console.log(item.id);
            if(name){
              return <li>{type}</li>
              return <PokeCard key={id} name={name} />
            }

          })
        } */}

        
      </ul>
      
    </div>
  )
}
