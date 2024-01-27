//revisar lo de la KEY porque aún da error
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PokeListComponent from "@/Components/PokeListComponent";
import { getPokemons } from "@/api/pokemonFetch";

export default function Home() {
  const pokemons = getPokemons();

  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    setPokeList(pokemons);
  }, []);
  console.log("pokelist", pokeList);
  return (
    <div>
      <h1>Pokemon</h1>
      <Link href={"/createPokemonPage"}>Create Pokemon</Link>
      <Link href={"/contacPage"}>Contact</Link>
      <hr />
      {pokeList.map((p) => {
        return (
          <PokeListComponent key={p.id} id={p.id} name={p.name} url={p.url} />
        );
      })}
    </div>
  );
}
