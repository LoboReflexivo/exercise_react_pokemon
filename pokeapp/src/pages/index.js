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

  return (
    <div>
      <h1>Pokemon</h1>
      <Link href={"/creationPage"}>Create Pokemon</Link>
      <Link href={"/contactPage"}>Contact</Link>
      <hr />
      {pokeList.map((p) => {
        return (
          <>
            <PokeListComponent id={p.id} name={p.nombre} url={p.url} />
          </>
        );
      })}
    </div>
  );
}
