/*
FALTA
-BOTON DELETE POKEMON
-Editar también
*/

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  deletePokemonById,
  getPokemonById,
  modifyName,
} from "@/api/pokemonFetch";
import DetailsComponent from "@/Components/DetailsComponent";
import { useRouter } from "next/router";

export default function pokeDetails() {
  const [pokeData, setPokeData] = useState({});
  const [newPokeName, setNewPokeName] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const data = getPokemonById(idImported); //Dentro de useEffect cogemos los datos
    setPokeData({ data });
  }, [idImported]);

  const renamehandler = (e) => {
    setNewPokeName(e.target.value);
  };

  const changeHidden = () => {
    const hiddenAux = hidden;
    setHidden(!hiddenAux);
  };

  return (
    <>
      <div>
        <h1>pokeDetails</h1>
        <div hidden={!hidden}>
          <input value={newPokeName} onChange={renamehandler} />
          <button onClick={modifyName(idImported, newPokeName)}>
            Change name
          </button>
        </div>
        <div hidden={hidden}>
          <DetailsComponent
            id={pokeData.id}
            name={pokeData.name}
            url={pokeData.rul}
          />
        </div>
        <div>
          <button onClick={deletePokemonById(idImported)}>
            Delete Pokemon
          </button>
        </div>
        <div>
          <button onClick={changeHidden} hidden={hidden}>
            Edit Pokemon
          </button>
          <button onClick={changeHidden} hidden={!hidden}>
            Exit
          </button>
        </div>
        <div>
          <Link href={"/"}>Home</Link>
        </div>
      </div>
    </>
  );
}
