import React from 'react'
import "../List.css"

interface MyProps {
  name: string;
  url: string;
}

export const List = ({ pokemonList }: { pokemonList: MyProps[] }) => {
  return (
    <>    
    <ul>
    {pokemonList.map((pokemon, index) => (
      <li key={index}>{pokemon.name}</li>
    ))}
  </ul>
  </>
  )
}