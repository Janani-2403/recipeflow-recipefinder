import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

import Home from "./pages/Home.js";
import Recipes from "./pages/Recipes.js";
import RecipeDetails from "./pages/RecipeDetails.js";
import Cuisine from "./pages/Cuisine";
import Favorites from "./pages/Favorites.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
