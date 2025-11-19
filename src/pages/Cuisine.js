import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cuisine() {
  const [cuisines, setCuisines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => res.json())
      .then(data => setCuisines(data.meals));
  }, []);

  return (
    <div className="cuisine-page">
      <h1>Explore by Cuisine</h1>

      <div className="cuisine-grid">
        {cuisines.map((item, index) => (
          <div 
            className="cuisine-card" 
            key={index}
            onClick={() => navigate(`/recipes?cuisine=${item.strArea}`)}
          >
            <span>{item.strArea}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
