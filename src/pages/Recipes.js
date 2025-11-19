import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import "../styles/partials/recipes.scss";


export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [previousSearches, setPreviousSearches] = useState(
    JSON.parse(localStorage.getItem("previousSearches")) || []
  );

  // Detect cuisine from URL
  const [searchParams] = useSearchParams();
  const cuisineFromURL = searchParams.get("cuisine");

  useEffect(() => {
    if (cuisineFromURL) {
      fetchByCuisine(cuisineFromURL);
    } else {
      fetchRandomMeals();
    }
  }, [cuisineFromURL]);

  //  Fetch 9 Random Meals (default view)
  function fetchRandomMeals() {
    setLoading(true);

    Promise.all(
      Array.from({ length: 9 }).map(() =>
        fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json())
      )
    ).then(results => {
      const meals = results.map(r => r.meals[0]);
      setRecipes(meals);
      setLoading(false);
    });
  }

  // Fetch Recipes by Cuisine (Area)
  function fetchByCuisine(area) {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data.meals || []);
        setLoading(false);
      });
  }

  // Search Recipes by Name
  function searchRecipes(e) {
    e.preventDefault();
    if (!searchText.trim()) return;

    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data.meals || []);
        setLoading(false);
      });

    updatePreviousSearches(searchText);
  }

  // Update Previous Searches & Save to LocalStorage
  function updatePreviousSearches(text) {
    let updated = [text, ...previousSearches.filter(item => item !== text)];
    if (updated.length > 8) updated = updated.slice(0, 8);
    setPreviousSearches(updated);
    localStorage.setItem("previousSearches", JSON.stringify(updated));
  }

  return (
    <div className="recipes-page">

      {/* Show Cuisine Title Only If Coming From Cuisine Page */}
      {cuisineFromURL && searchText.trim() === "" && (
  <h2 className="cuisine-title">
    Showing: <span>{cuisineFromURL} Cuisine</span>
  </h2>
)}


      <div className="recipes-header">
        <h2>Previous Searches</h2>

        <div className="previous-searches">
          {previousSearches.map((item, i) => (
            <button key={i} onClick={() => setSearchText(item)}>
              {item}
            </button>
          ))}
        </div>

        <form className="search-bar" onSubmit={searchRecipes}>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="recipes-container">
        {loading && <p className="loading">Loading...</p>}
        {!loading && recipes.length === 0 && <p className="no-recipes">No recipes found</p>}

        {!loading &&
          recipes.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
}
