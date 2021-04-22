const html = require('../components/html.js');
const db = require('../../database/connection.js');
const model = require('../../database/model.js')

function homepageHandler(request, response) {
    let recipeList, ingredientList
    
    model.getRecipes().then((recipes) => {
        recipeList = recipes.map((recipe) => `<li>${recipe.name}</li>`).join(""); 
        let newHtml = html.homepageHtml(recipeList)
        response.send(newHtml);
      });

      

      
      
    //   model.getIngredientsForRecipes().then((ingredients) => {
    //     console.log(ingredients)
    //     // ingredientList = ingredients.map((ingredient) => `<li>${ingredient.name}</li>`).join("");
    //         // console.log(ingredientList)
    //         });
    // // 
    

    
  
}    

function postForm(request, response){
    
    //take the input
    //query the database for the ingredient id
    //post selected list of items (recipe names) that match this ingredient 
    //if no match, post "Starve"
}

module.exports = {
    homepageHandler:homepageHandler, 
    postForm: postForm};
 
