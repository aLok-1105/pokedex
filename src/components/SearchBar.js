import React, { useState } from 'react'
import PokeCard from './PokeCard';

export default function SearchBar() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);



  const handleChange = (e)=>{
    const promises = [];
    setInput(e.target.value);
    if(e.target.value){
      fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`).then(res=>res.json()).then(result => {
      promises.push(result);
		    setResults(result);
		    console.log(result);
		})
    }
  }

  Object.values(results)[16].map((e)=>{
    console.log(e.type.name);
  })

  // console.log(Object.values(results)[16][1].type.name);

  return (
    <div>
      <input onChange={handleChange} value={input}/>
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
