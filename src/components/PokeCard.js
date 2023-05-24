import React from 'react'

export default function PokeCard({img, name}) {
    // console.log(img);
  return (
    <>
        <div className="card" style={{width: '18rem'}}>
        <img src={img} style={{width: '100px'}} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
    </>
  )
}
