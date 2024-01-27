import { addPokemon, getPokemons } from "@/api/pokemonFetch";
import React, { useState } from "react";

export default function createPage() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [type, setType] = useState([]);

  const newIdHander = (e) => {
    return setId(e.target.value);
  };
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
  console.log(addPokemon(id, name, url, height, weight));
  // const creacionArray = (e) =>{
  //   let newArray
  //   let valor = e.target.value
  //   return newArray.push(valor)
  // }
  // const newTypeHandler = (e) =>{
  //   const type= e.target.value

  // }
  //Boton con pop(Borrar el ultimo elemento del array de tipos)

  //para borrar tipo, primero mirar el index en el que está el tipo y luego eliminarlo con respecto a dicha posición

  //¿Hacer un boton para todo?
  return (
    <div>
      <input type="number" value={id} onChange={newIdHander} />
      <input type="string" value={name} onChange={newNameHander} />
      <input type="string" value={url} onChange={newUrlHandler} />
      <input type="string" value={height} onChange={newHeightHandler} />
      <input type="number" value={weight} onChange={newWeightHandler} />
      <button
        onClick={() => {
          addPokemon(id, name, url, height, weight);
        }}
      >
        Save Pokemon
      </button>
    </div>
  );
}
