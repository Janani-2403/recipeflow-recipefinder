import { Link, useNavigate } from "react-router-dom";
import CustomImage from "../components/Customimage";
import "../styles/partials/recipeCard.scss";

export default function RecipeCard({ meal }) {
  const navigate = useNavigate();

  // Provide fallback text when category/area are not available
  const area = meal.strArea || "Unknown Area";
  const category = meal.strCategory || "Category";

  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/recipe/${meal.idMeal}`)}
    >
      <CustomImage imgSrc={meal.strMealThumb} pt="65%" />

      <div className="recipe-info">
        <h3>{meal.strMeal}</h3>

        {/* Display safe text */}
        <p>{area} • {category}</p>

        <Link to={`/recipe/${meal.idMeal}`} className="view-recipe-btn">
          View Recipe
        </Link>
      </div>
    </div>
  );
}
