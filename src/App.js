import React from "react";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/recipe" element={<Recipe/>} />
          <Route path="/" element={<Recipes />} />
        </Routes>
    </Router>
  );
}

