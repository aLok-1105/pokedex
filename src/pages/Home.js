/** @format */

import React, { useEffect, useState } from 'react';
import PokeGrid from '../components/PokeGrid';

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1);
	const [input, setinput] = useState('');
	const pokemonsPerPage = 12;
	const [pokemon, setPokemon] = useState([]);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const indexOfLastpokemon = currentPage * pokemonsPerPage;
	const indexOfFirstpokemon = indexOfLastpokemon - pokemonsPerPage;

	useEffect(() => {
		const fetchPokemon = () => {
			const promises = [];
			for (let i = 1; i <= 100; i++) {
				const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
				promises.push(fetch(url).then((res) => res.json()));
			}
			Promise.all(promises).then((results) => {
				const fetchedPokemon = results.map((result) => ({
					name: capitalizeFirstLetter(result.name),
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
				// console.log(fetchedPokemon);
				setPokemon(fetchedPokemon);
			});
		};
		// console.log(pokemon);
		fetchPokemon();
	}, []);

	const filteredpokemons = pokemon.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(input.toLowerCase())
	);

	const currentpokemons = filteredpokemons.slice(
		indexOfFirstpokemon,
		indexOfLastpokemon
	);

	useEffect(() => {
		setCurrentPage(1);
	}, [input]);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<div>
				<div className='container mt-5'>
					<input
						type='text'
						value={input}
						onChange={(e) => setinput(e.target.value)}
						placeholder='Search by name'
					/>
				</div>
				<div>
					<PokeGrid pokemon={currentpokemons} input={input} />
				</div>
				<div>
					{Array.from(
						{
							length: Math.ceil(
								filteredpokemons.length / pokemonsPerPage
							),
						},
						(_, index) => (
							<button
								key={index}
								onClick={() =>
									handlePageChange(index + 1)
								}>
								{index + 1}
							</button>
						)
					)}
				</div>
			</div>
		</>
	);
}
