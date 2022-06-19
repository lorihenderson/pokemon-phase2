import React from "react";
import PokemonCard from './PokemonCard'
import MyPokemon from './MyPokemon'
import PokemonBox from './PokemonBox'
import PokemonForm from './PokemonForm'

function NavBar() {
    return(
        <>
        <PokemonCard />
        <PokemonBox />
        <MyPokemon />
        </>
    )
}

export default NavBar