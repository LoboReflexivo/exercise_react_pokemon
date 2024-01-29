import { addPokemon, getPokemons } from "@/api/pokemonFetch";
import { pokemons } from "@/mock/dbPokemon";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function createPage() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    const newId = pokemons.length + 1;
    return setId(newId);
  }, []);

  const newNameHander = (e) => {
    return setName(e.target.value);
  };
  const newUrlHandler = (e) => {
    return setUrl(e.target.value);
  };
  const newHeightHandler = (e) => {
    return setHeight(e.target.value);
  };
  const newWeightHandler = (e) => {
    return setWeight(e.target.value);
  };
  const newTypeHandler = (e) => {
    let typeAux = e.target.value;
    setType(typeAux);
  };

  console.log("type", type);

  if (typeof type == "undefined") {
    return;
  }
  return (
    <div>
      <div>
        <h3>Pokename</h3>
        <input type="string" value={name} onChange={newNameHander} />
      </div>
      <div>
        <h3>Pokeurl</h3>
        <input type="string" value={url} onChange={newUrlHandler} />
      </div>
      <div>
        <h3>pokeheight</h3>
        <input type="string" value={height} onChange={newHeightHandler} />
      </div>
      <div>
        <h3>PokeWeight</h3>
        <input type="number" value={weight} onChange={newWeightHandler} />
      </div>
      <div>
        <h3>PokeTypes</h3>
        <input type="string" value={type} onChange={newTypeHandler} />
        <small>
          The types are necesary that they're separated with spaces{","}
        </small>
      </div>
      <div>
        <button
          onClick={() => {
            addPokemon(id, name, url, height, weight, type.split(" "));
          }}
        >
          Save Pokemon
        </button>
      </div>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  );
}
