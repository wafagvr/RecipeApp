import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "cbe5367e05b7410ca8d0d1180431aca1";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  //Syntax of useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const resp = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await resp.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
