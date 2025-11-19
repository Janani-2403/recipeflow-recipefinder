import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link, useNavigate } from "react-router-dom";

export default function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  return (
    <div className="favorites-page">
      <h2>My Favorite Recipes ❤️</h2>

      {favorites.length === 0 ? (
        <p className="no-fav">
          No favorites yet. <Link to="/recipes">Find Recipes</Link>
        </p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((meal) => (
            <li key={meal.idMeal} className="favorite-item">

              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h4>{meal.strMeal}</h4>

              <div className="fav-actions">

                {/*  View Recipe Action */}
                <button
                  className="view-btn"
                  onClick={() => navigate(`/recipe/${meal.idMeal}`)}
                >
                  View Recipe
                </button>

                {/* Remove from favorites */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(meal.idMeal)}
                >
                  Remove
                </button>

              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
