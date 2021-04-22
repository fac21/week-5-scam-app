const html = require("../components/html.js");
const db = require('../../database/connection.js');

function addRecipe (request, response) {
    let newHtml = html.addRecipeHtml();
    response.send(newHtml);
    response.redirect("/add-recipe")
    }

function addToDb(request, response){
  const info = request.body;
  db.query("INSERT INTO users(name) VALUES($1)", [info.username]);
  db.query("INSERT INTO recipes(name) VALUES($1)", [info.recipe_name]);
  //const ingredArray = info.ingredients.split("").trim();
  //ingredArray.forEach(x => db.query("INSERT INTO ingredients(name) VALUES ($1)", [x]))
}
      

function recipeAdded(request, response) {
  addToDb(request, response);
  response.send("<h1>Recipe added! Thank you for contributing to our database.</h1>")
  response.redirect("/recipe-added")
  
}

module.exports = {addRecipe: addRecipe, recipeAdded: recipeAdded};

// INSERT INTO users (name) VALUES
//   ('Chisha'),
//   ('Saki'),
//   ('Amy'),
//   ('Mariya')
// ;

// INSERT INTO recipes (name, user_id) VALUES
//   ('Carrot Cake', 1),
//   ('Carrot and Ginger Soup', 2),
//   ('Steak and Chips', 3),
//   ('Carrot and Veggie Lasagne', 4)
// ;

// INSERT INTO ingredients (name) VALUES
//   ('Carrots'),
//   ('Flour'),
//   ('Egg'),
//   ('Ginger'),
//   ('Steak'),
//   ('Potatoes'),
//   ('Peppers'),
//   ('Tomatoes'),
//   ('Pasta')
// ;

// INSERT INTO match_recipe_ingredients (recipe_id, ingredient_id) VALUES
//   (1, 1),
//   (1, 2)
// ;