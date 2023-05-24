import React from 'react'
import PokeCard from './PokeCard';

export default function PokeGrid({pokemon, input}) {
    // console.log(allPokemon);

    
  return (
    <div className='container poke-container'>
            {pokemon.filter((pokemon)=>{
                return input.toLowerCase() ===''? pokemon : pokemon.name.toLowerCase().includes(input);
            }).map((pokemon)=>(
                <PokeCard key={pokemon.id} img={pokemon.image} name={pokemon.name} type={pokemon.type} />
            ))}
        
    </div>
  )
}
