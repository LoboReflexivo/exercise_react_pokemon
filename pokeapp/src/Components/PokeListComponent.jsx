import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PokeListComponent(props) {
  const { id, name, url } = props;

  const [newId, setNewId] = useState("");
  useEffect(() => {
    setNewId(id);
  }, []);

  return (
    <div>
      <div>
        <div>
          <p>id: {id}</p>
          <p>name: {name}</p>
          <p>url: {url}</p>
        </div>
        <Link
          href={{
            pathname: "/pokeDetails",
            query: {
              identificador: props.id,
            },
          }}
        >
          More information of {name}
        </Link>
      </div>
      <hr />
    </div>
  );
}
