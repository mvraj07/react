import { useEffect, useState } from "react";

export default function ApiLearn() {
  const API = "https://pokeapi.co/api/v2/pokemon";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const pokemonData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log("error found: ", error);
        setLoading(false);
        setError(true);
      }
    };
    pokemonData();
  }, []);

  return (
    <>
      <h1>api data:</h1>

      <h2>
        {loading ? "Loading..." : error ? "Error Occured" : "Data Fetched"}
      </h2>
    </>
  );
}
