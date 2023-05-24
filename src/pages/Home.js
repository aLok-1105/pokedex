/** @format */

import React, { useEffect, useState } from 'react';
import PokeGrid from '../components/PokeGrid';
import SearchBar from '../components/SearchBar';
import PokeCard from '../components/PokeCard';


export default function Home() {
	var [input, setInput] = useState('');

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const [pokemon, setPokemon] = useState([]);
	const [allPokemon, setAllPokemon] = useState([]);

  const [index, setIndex] = useState(12);


  const loadMore = ()=>{
    setIndex(index+12);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// const getAllPokemon = ()=>{
// 	fetch(`https://pokeapi.co/api/v2/pokemon/${input}`).then((res)=>res.json()).then((resu)=>{
// 		console.log(resu);
// 		setAllPokemon(resu);
// 	})
// }


useEffect(()=>{


const fetchAllPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 40; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const fetchedPokemon = results.map((result) => ({
      name: capitalizeFirstLetter(result.name),
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
        result.id < 10
          ? '00' + result.id
          : '0' + result.id
      }.png`,
      type: result.types
        .map((type) => type.type.name)
        .join(', '),
      id: result.id,
    }));
    // console.log(fetchedPokemon);
    setAllPokemon(fetchedPokemon);
  });
};
console.log(allPokemon);
fetchAllPokemon();
}, []);



	useEffect(() => {
		const fetchPokemon = () => {
			const promises = [];
			for (let i = 1; i <= 20; i++) {
				const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
				promises.push(fetch(url).then((res) => res.json()));
			}
			Promise.all(promises).then((results) => {
				const fetchedPokemon = results.map((result) => ({
					name: capitalizeFirstLetter(result.name),
					image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
						result.id < 10
							? '00' + result.id
							: '0' + result.id
					}.png`,
					type: result.types
						.map((type) => type.type.name)
						.join(', '),
					id: result.id,
				}));
				// console.log(fetchedPokemon);
				setPokemon(fetchedPokemon);
			});
		};
    // console.log(pokemon);
		fetchPokemon();
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const itemsPerPage = 10;

	const filteredItems = pokemon.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
	// Calculate the indexes of the items to display on the current page
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

	useEffect(() => {
		setCurrentPage(1);
	  }, [searchTerm]);
  
	// Handle page change
	const handlePageChange = (pageNumber) => {
	  setCurrentPage(pageNumber);
	};

	return (
		<>
		{/* <SearchBar data={allPokemon}/> */}
			<div>
				<div className='container mt-5'>
					<input
						type='text'
						onChange={handleChange}
						value={input}
					/>
				</div>
				<div>
					<PokeGrid pokemon={pokemon} allPokemon={allPokemon} input={input} />
				</div>
        <div>
          <button type='button' onClick={loadMore}>Load More</button>
        </div>
		<div>

		<input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name"
      />

		{currentItems.filter((item)=>{
                return input.toLowerCase() ===''? item : item.name.toLowerCase().includes(input);
            }).map((item)=>(
                <PokeCard key={item.id} img={item.image} name={item.name} />
            ))}

		{/* {currentItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}

		{Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
		</div>
			</div>
		</>
	);
}
