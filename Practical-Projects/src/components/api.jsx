import { useEffect, useState } from "react";

export default function ApiLearn() {
  const API = "https://pokeapi.co/api/v2/pokemon";
  const [data, setData] = useState(null);
  useEffect(() => {
    const pokemonData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("error found: ", error);
      }
    };
    pokemonData();
  }, []);
  return (
    <>
      <h1>api data:</h1>
      <p></p>
    </>
  );
}
