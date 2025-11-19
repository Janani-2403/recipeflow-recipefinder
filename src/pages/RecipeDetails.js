import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/partials/recipeDetails.scss";
import { FavoritesContext } from "../context/FavoritesContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  function handleFavorite() {
    const exists = favorites.find((item) => item.idMeal === meal.idMeal);

    if (exists) {
      removeFromFavorites(meal.idMeal);
    } else {
      addToFavorites(meal);
    }
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) ingredients.push(`${ing} - ${measure}`);
  }

  return (
    <div className="recipe-details">
      <h1>{meal.strMeal}</h1>

      <button className="fav-btn" onClick={handleFavorite}>
        {favorites.some((item) => item.idMeal === meal.idMeal)
          ? "★ Saved"
          : "☆ Add to Favorites"}
      </button>

      <div className="recipe-content-row">
        <div className="image-box">
          <img className="recipe-img" src={meal.strMealThumb} alt={meal.strMeal} />
        </div>

        {/* INGREDIENTS */}
        <div className="left">
          <h3>Ingredients</h3>
          <ul className={`collapse-text ${showIngredients ? "expanded" : ""}`}>
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {ingredients.length > 10 && (
            <button
              className="toggle-btn"
              onClick={() => setShowIngredients(!showIngredients)}
            >
              {showIngredients ? "Show Less ▲" : "Show More ▼"}
            </button>
          )}
        </div>

        {/* INSTRUCTIONS */}
        <div className="right">
          <h3>Instructions</h3>
          <div className={`collapse-text ${showInstructions ? "expanded" : ""}`}>
            {meal.strInstructions.split("\n").map(
              (step, i) => step.trim() && <p key={i}>• {step}</p>
            )}
          </div>

          <button
            className="toggle-btn"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            {showInstructions ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>
      </div>

      {meal.strYoutube && (
        <div className="video-btn">
          <a href={meal.strYoutube} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        </div>
      )}

      <Link to="/recipes" className="back-btn">
        ← Back
      </Link>
    </div>
  );
}
