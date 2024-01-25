import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPokemonById } from "@/api/pokemonFetch";
import DetailsComponent from "@/Components/DetailsComponent";
import { useRouter } from "next/router";
import PokeListComponent from "@/Components/PokeListComponent";

export default function pokeDetails(props) {
  const router = useRouter(); //router
  const { identificador } = router.query; //el id que hemos pasado

  console.log(`Este es el id ${identificador}`);

  const infoPokemon = getPokemonById(identificador);

  const [newInfo, setNewInfo] = useState({});

  useEffect(() => {
    setNewInfo(infoPokemon);
  }, []);

  console.log(`Esta es la info ${props}`);

  return (
    <>
      <div>
        <h1>pokeDetails</h1>
        <DetailsComponent />
        <div>
          <button>Delete Pokemon</button>
        </div>
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <button>Edit Pokemon</button>
        </div>
      </div>
    </>
  );
}
