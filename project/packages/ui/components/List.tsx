import React from 'react'
import "../List.css"

interface MyProps {
  name: string;
  url: string;
}

export const List = ({ pokemonList }: { pokemonList: MyProps[] }) => {
  return (
    <div className="parentGrid">
      {pokemonList.map((pokemon, index) => (
        <div key={index} className="childItem">
          {pokemon.name}
        </div>
      ))}
    </div>
  )
}