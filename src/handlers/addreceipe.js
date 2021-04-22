const html = require("../components/html.js")

function addRecipe (request, response) {
    let newHtml = html.addRecipeHtml();
    response.send(newHtml);
    response.redirect("/add-recipe")
    }
      

function recipeAdded(request, response) {
  response.redirect("/recipe-added")
  response.send("<h1>Recipe added! Thank you for contributing to our database.</h1>")
}

module.exports = {addRecipe: addRecipe, recipeAdded: recipeAdded};