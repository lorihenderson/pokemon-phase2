import React from "react";
import NavBar from './NavBar'
import PokemonCard from "./PokemonCard";

function PokemonCollection({ pokemons }) {

    return(
        <>
        <NavBar />
            <div> 
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>

            
        
        </>
        
    )

}

export default PokemonCollection
