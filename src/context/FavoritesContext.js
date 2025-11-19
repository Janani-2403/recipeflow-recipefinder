import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Load from localStorage on app start
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites"));
    if (stored) setFavorites(stored);
  }, []);

  // Save to localStorage whenever changed
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(meal) {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.idMeal === meal.idMeal);
      if (exists) return prev; // avoid duplicate
      return [meal, ...prev];
    });
  }

  function removeFromFavorites(idMeal) {
    setFavorites((prev) => prev.filter((item) => item.idMeal !== idMeal));
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
