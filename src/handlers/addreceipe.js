const html = require("../components/html.js");
const db = require('../../database/connection.js');

function addRecipe (request, response) {
    let newHtml = html.addRecipeHtml();
    response.send(newHtml);
    response.redirect("/add-recipe")
    }
      

function recipeAdded(request, response) {
  response.send("<h1>Recipe added! Thank you for contributing to our database.</h1>")
  response.redirect("/recipe-added")
  
}

module.exports = {addRecipe: addRecipe, recipeAdded: recipeAdded};