import React from "react";

function PokemonCard({ pokemon }) {


    return(
        <div className="ui-card" 
            key={pokemon.id}
            onClick={() => console.log('add click event')}
            >
                <div className="image">
                    <img src={pokemon.image} alt="pokemon" />
                </div>
                <div className='name'>{pokemon.name}</div>
        </div>
    )
   
}

export default PokemonCard