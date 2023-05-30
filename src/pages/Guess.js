import React, { useState } from 'react'

import LOADER from '../gif/loader.gif'
import WIN from '../gif/win.gif'

export default function Guess() {

    // console.log(Math.floor(Math.random() * (1000 - 1)) + 1);
    const v = Math.floor(Math.random() * (1000 - 1)) + 1;

    
    

    const [img, setImg] = useState(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${v < 10
    ? '00' + v
    : v < 100
    ? '0' +v
    : +v}.png`);
    const [name, setName] = useState('');
    const [input, setInput] = useState('');
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);

    // useEffect (() => {
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 2500);
    // }, []);
    

    const reset = ()=>{
        setLoading(true);
        setImg(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${v < 10
            ? '00' + v
            : v < 100
            ? '0' +v
            : +v}.png`);
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${v}`).then((res)=>res.json()).then((result)=>{
                // console.log(result);
                setLoading(false);
                setName(result.name)});
        setCheck(false);
        setInput('');
        setCheck(false);
    }

    const handleClick = (()=>{
        setLoading(true);
        if(name === input.toLocaleLowerCase()){
            setCheck(true);
            console.log(name);
        }
        else{
            setCheck(false);
        }
        setLoading(false);

    })
    // setTimeout(() => {
    //     setCheck(false);
    // }, 10000);

    // console.log(check);

    const handleKeyDown = (e)=>{
        if(e.key === 'Enter'){
            handleClick();
        }
    }


  return (
    <>  
        {
            !loading ?
                
        <div className='container guess-cont' style={{backgroundImage: check? `url(${WIN})`: '',     backgroundPosition: 'center'}}>

        <div>
            <h1>Guess</h1>
        </div>

            <div className="guess-form">
                    <i className="fa fa-search"></i>
                    <input type='text' value={input} onChange={(e)=>(setInput(e.target.value))} onKeyDown={handleKeyDown} />
                    <span className="left-pan"><i className="fa fa-microphone"></i></span>
                </div>

                <div className='check-btn'>
                    <button type='button' onClick={handleClick}>Check</button>
                </div>

                <div className='guess-img-cont'>
                    <img src={img} alt='img' className='guess-img' style={{filter: check ?  'brightness(1)' :'brightness(0)'}} />
                </div>

                <div className='reset-btn'>
                    <button type='button' onClick={reset}>Next</button>
                </div>
                    {/* {input.length === 0 ? <h1>Give a try</h1> : ''} */}
                    {/* {check && input.length !== 0? <img src={WIN} className='win-img' alt='Loading...'/> : ''} */}
                    {!check && input.length !== 0 ? <h1>next try</h1> : ''}
                </div>
            :
            <>
            <div className='loader-cont'>
                <img src={LOADER} alt='Loading...' style={{width: '50px'}}/>
            </div>
            
            {/* <div className="ball"></div> */}
                {/* <div className="wrapper">
                    <div className="pokeball"> </div>
                </div> */}
            </>
        }

        
    </>
  )
}
