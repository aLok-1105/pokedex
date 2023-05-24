import React from 'react'
import PokeCard from './PokeCard';

export default function PokeGrid({pokemon, input, allPokemon}) {
    // console.log(allPokemon);

    
  return (
    <div className='container poke-container'>
            {pokemon.filter((item)=>{
                return input.toLowerCase() ===''? item : item.name.toLowerCase().includes(input);
            }).map((item)=>(
                <PokeCard key={item.id} img={item.image} name={item.name} />
            ))}
        
    </div>
  )
}
