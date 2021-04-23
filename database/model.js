const db = require("./connection.js");

// function getRecipes(request) {
//  return db.query("select recipes.name from recipes where id in (select match_recipe_ingredients.recipe_id from match_recipe_ingredients where id IN (select ingredients.id from ingredients where name = 'Carrots'))
//  , [search-filter])
// .then((result) => result.rows)
// //Catching any errors
// .catch((error) => {
//     console.error(error);
//     // do stuff with the error here
//   });
// }

function getRecipes()  {
  return db.query("SELECT name FROM Recipes").then((result) => result.rows)
  .catch((error) => {
        console.error(error);
      });
} 

// module.exports = { getUsers };
//We will need to update this function with our own recipe query
// function getIngredientsForRecipes(){
//   return db.query("SELECT name FROM ingredients).then((result) => console.log(result))
//   .catch((error) => {
//         console.error(error);
        
//       });
  
      // IN (SELECT ingredient_id FROM match_recipe_ingredients WHERE recipe_id = 'B'"
  // WHERE (recipe id) IN (SELECT name FROM Recipes)"
// }
module.exports = { getRecipes };// function getIngredientsForRecipes(){
  //   return db.query("SELECT name FROM ingredients).then((result) => console.log(result))
  //   .catch((error) => {
  //         console.error(error);
          
  //       });
    
        // IN (SELECT ingredient_id FROM match_recipe_ingredients WHERE recipe_id = 'B'"
    // WHERE (recipe id) IN (SELECT name FROM Recipes)"
  // }