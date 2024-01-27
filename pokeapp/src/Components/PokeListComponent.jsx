import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PokeListComponent(props) {
  const { id, name, url } = props;
  console.log("id", id);
  console.log("name", name);
  console.log("url", url);

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
            pathname: "/pokeDetailsPage",
            query: {
              idImported: id,
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
