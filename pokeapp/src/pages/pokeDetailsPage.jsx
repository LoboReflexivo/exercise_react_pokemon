/*Tener cuidado. los console.log dentro de los effect. y no se pueden meter en variables para luego renderizarlos, necesitan estar en un estado */

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
  let router = useRouter();
  let { idImported } = router.query;
  const [information, setInformation] = useState({});
  const [newPokeName, setNewPokeName] = useState("");
  const [hidden, setHidden] = useState(false);

  const [details, setDetails] = useState({});

  useEffect(() => {
    let infoAux = getPokemonById(idImported); //Para sacar la información del pokemon
    setInformation(infoAux);
    setDetails(infoAux.details);
  }, []);

  const renamehandler = (e) => {
    setNewPokeName(e.target.value);
  };
  const deleteAndBack = (id) => {
    deletePokemonById(id);
    router.back();
  };
  const changeHidden = () => {
    const hiddenAux = hidden;
    setHidden(!hiddenAux);
  };

  // console.log("empty string", !""); // true
  // console.log("empty space", !" "); // false
  // console.log("zero as string", !"0"); // false
  // console.log("0 number", !0); // true
  // console.log("string", !"sdiuhf"); // false
  // console.log("information.id", typeof information.id, information.id);

  if (typeof information.id == "undefined") {
    return;
  }

  return (
    <>
      <div>
        <h1>pokeDetails</h1>
        <div hidden={!hidden}>
          <input value={newPokeName} onChange={renamehandler} />
          <button
            onClick={() => {
              modifyName(idImported, newPokeName);
            }}
          >
            Change name
          </button>
        </div>
        <div hidden={hidden}>
          <DetailsComponent
            id={information.id}
            name={information.name}
            url={information.url}
            height={details.height}
            weight={details.weight}
            type={details.type}
          />
        </div>
        <div>
          <button
            onClick={() => {
              deleteAndBack();
            }}
          >
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
