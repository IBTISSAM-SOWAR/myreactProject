import './App.css';

import  { useState } from "react";

const App = () => {
  const [content, setContent] = useState("dashboard");

  const indianRecipes = () => {
    const recipes = [
      { title: "Cheese Triangles", description: "Delicious cheesy triangles.", image: "images/immge.jpg" },
      { title: "Baked Lamb", description: "A traditional Indian lamb dish.", image: "images/immge.jpg" },
      { title: "Pan-Fried Fish", description: "Fresh fish lightly pan-fried.", image: "images/immge.jpg" },
    ];

    return (
      <div className="indian-recipe-list">
        <h1 className="text-2 font-semibold mb-4">Indian Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-item bg-white rounded shadow-lg p-4">
              <img className="w-full h-36 object-cover rounded" src={recipe.image} alt={recipe.title} />
              <h3 className="text-gray-700 text-lg font-bold mt-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{recipe.description}</p>
              <div className="mt-4 flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => alert(recipe.title)}>View</button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const albanianRecipes = () => {
    const recipes = [
      { title: "Pizza", description: "Classic pizza with an Indian twist.", image: "images/immg.jpg" },
      { title: "Sheqerpare", description: "Sweet syrup-soaked cookies.", image: "images/immg.jpg" },
      { title: "Flija Pancake", description: "Layered pancake, a Balkan delicacy.", image: "images/immg.jpg" },
      { title: "Revani Cake", description: "Traditional semolina-based dessert.", image: "images/immg.jpg" },
    ];

    return (
      <div className="albanian-recipe-list">
        <h1 className="text-2 font-semibold mb-4 mt-4">Albanian Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-item bg-white rounded shadow-lg p-4">
                 
              <img className="w-full h-36 object-cover rounded" src={recipe.image} alt={recipe.title} />
              <h2 className=''>{recipe.title}</h2> 
              <h3 className="text-gray-700 text-lg font-bold mt-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{recipe.description}</p>
              <div className="mt-4 flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => alert(recipe.title)}>View</button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className="btn btn-primary gap-2" onClick={() => setContent("dashboard")}>Dashboard</button>
        <button className="btn btn-primary gap-2" onClick={() => setContent("albanian")}>Albanian Recipes</button>
        <button className="btn btn-primary gap-5" onClick={() => setContent("indian")}>Indian Recipes</button>
      </div>

      <div id="content">
        {content === "dashboard" && (
          <>
            {albanianRecipes()}
            {indianRecipes()}
          </>
        )}
        {content === "albanian" && albanianRecipes()}
        {content === "indian" && indianRecipes()}
      </div>
    </div>
  );
};

export default App;
