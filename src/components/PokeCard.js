import React from 'react'

import Bug from '../images/BugType.png'
import Dark from '../images/DarkType.png'
import Dragon from '../images/DragonType.png'
import Electric from '../images/ElectricType.png'
import Fairy from '../images/FairyType.png'
import Fighting from '../images/FightingType.png'
import Fire from '../images/FireType.png'
import Flying from '../images/FlyingType.png'
import Ghost from '../images/GhostType.png'
import Grass from '../images/GrassType.png'
import Ground from '../images/GroundType.png'
import Ice from '../images/IceType.png'
import Normal from '../images/NormalType.png'
import Poison from '../images/PoisonType.png'
import Psychic from '../images/PsychicType.png'
import Rock from '../images/RockType.png'
import Steel from '../images/SteelType.png'
import Water from '../images/WaterType.png'


export default function PokeCard({img, name, type}) {

  // console.log(type);

  var textCol = 'black';

  const pokeType = (type)=>{
    if(type === "grass"){
      textCol = '#63bc5d'
      return Grass;
    }
    else if(type==='poison'){
      textCol = '#b667cd'
      return Poison;
    }
    else if(type==='fire'){
      textCol = '#fea34e'
      return Fire;
    }
    else if(type==='water'){
      textCol = '#b667cd'
      return Water;
    }
    else if(type==='electric'){
      textCol = '#b667cd'
      return Electric;
    }
    else if(type==='fighting'){
      textCol = '#b667cd'
      return Fighting;
    }
    else if(type==='flying'){
      textCol = '#91abdd'
      return Flying;
    }
    else if(type==='psychic'){
      textCol = '#b667cd'
      return Psychic;
    }
    else if(type==='rock'){
      textCol = '#b667cd'
      return Rock;
    }
    else if(type==='ground'){
      textCol = '#b667cd'
      return Ground;
    }
    else if(type==='ice'){
      textCol = '#b667cd'
      return Ice;
    }
    else if(type==='ghost'){
      textCol = '#b667cd'
      return Ghost;
    }
    else if(type==='steel'){
      textCol = '#b667cd'
      return Steel;
    }
    else if(type==='dragon'){
      textCol = '#b667cd'
      return Dragon;
    }
    else if(type==='dark'){
      textCol = '#b667cd'
      return Dark;
    }
    else if(type==='fairy'){
      textCol = '#b667cd'
      return Fairy;
    }
    else if(type==='normal'){
      textCol = '#989da0'
      return Normal;
    }
    else if(type==='bug'){
      textCol = '#b667cd'
      return Bug;
    }

  }

  function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

  console.log(capitalizeFirstLetter(type[0]));

  // https://www.pkparaiso.com/imagenes/xy/sprites/animados/charizard-3.gif
  //https://pokemon.gameinfo.io/images/game/details_type_bg_poison.png
  //https://vignette.wikia.nocookie.net/pokemongo/images/9/92/Type_Background_Grass.png/revision/latest?cb=20171026003722

  return (
    <>
        <div className="card" style={{width: '18rem'}}>
        <div className='card-img-cont' style={{backgroundImage:`url(https://pokemon.gameinfo.io/images/game/details_type_bg_${type[0]}.png)`, backgroundSize: 'contain'}}>
        <img src={img}  className="card-img-top" alt={name} />
        </div>
        
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className='type-cont'> 
            {/* <span className='type'>Type: </span>  */}
              {type.map((item)=>{
                
                return(
                    <>
                    <img src={pokeType(item)} className='type-img' alt={item} />
                    <span className='type' >{capitalizeFirstLetter(item)}</span>
                    </>
                  
                  )
              })} 
              </div>
        </div>
        </div>
    </>
  )
}
                    //style={{color:`${textCol}`}}
