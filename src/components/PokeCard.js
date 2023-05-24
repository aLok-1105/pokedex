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

  const pokeType = (type)=>{
    if(type === "grass"){
      return Grass;
    }
    else if(type==='poison'){
      return Poison;
    }
    else if(type==='fire'){
      return Fire;
    }
    else if(type==='water'){
      return Water;
    }
    else if(type==='electric'){
      return Electric;
    }
    else if(type==='fighting'){
      return Fighting;
    }
    else if(type==='flying'){
      return Flying;
    }
    else if(type==='psychic'){
      return Psychic;
    }
    else if(type==='rock'){
      return Rock;
    }
    else if(type==='ground'){
      return Ground;
    }
    else if(type==='ice'){
      return Ice;
    }
    else if(type==='ghost'){
      return Ghost;
    }
    else if(type==='steel'){
      return Steel;
    }
    else if(type==='dragon'){
      return Dragon;
    }
    else if(type==='dark'){
      return Dark;
    }
    else if(type==='fairy'){
      return Fairy;
    }
    else if(type==='normal'){
      return Normal;
    }
    else if(type==='bug'){
      return Bug;
    }

  }

  return (
    <>
        <div className="card" style={{width: '18rem'}}>
        <img src={img}  className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className='type-cont'> <span className='type'>Type: </span> 
              {type.map((item)=>{
                
                return(
                  
                    <img src={pokeType(item)} className='type-img' alt={item} />
                  
                  )
              })} 
              </div>
        </div>
        </div>
    </>
  )
}
