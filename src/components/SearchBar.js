// import React, { useState } from 'react'

// export const SearchBar = ({pokemon}) => {
//     console.log(pokemon);

//     const [input, setInput] = useState('');

//     // const fetchdata = (value)=>{
//     //     fetch(`https://pokeapi.co/api/v2/pokemon/${input}`).then((response)=>{response.json()}).then((json)=>{
//     //         const results = json.filter((item)=>{
//     //             return item.name.toLowerCase().includes(value.toLowerCase())
//     //         });
//     //         console.log(results);
//     //     })
//     // }

//     const handleChange = (value)=>{
//         setInput(value);
//         // fetchdata(value);
//     }

//   return (
//     <div>
//     <input type="text" placeholder="Search"  value={input} onChange={(e)=>{handleChange(e.target.value)}} />

//     {pokemon.filter((item)=>{
//         return input.toLowerCase() ===''? item : item.name.toLowerCase().includes(input);
//     }).map((item)=>(
//         <p>{item.name}</p>
//     ))}

//     </div>
//   )
// }




import React, { useState } from 'react';

const SearchBar = ({data}) => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // Implement the load more functionality
  const handleLoadMore = () => {
    const newData = data.slice(10, visibleData.length + 10);
    setVisibleData([...visibleData, ...newData]);
    setShowMore(newData.length === 10);
  };


  // Implement the search functionality
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const searchData = data.filter((item) =>
      item.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleData(searchData.slice(0, 10));
    setShowMore(searchData.length > 10);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {visibleData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {showMore && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default SearchBar;

