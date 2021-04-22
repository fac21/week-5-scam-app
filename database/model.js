const db = require("./connection.js");

function getRecipes()  {
  return db.query("SELECT name FROM Recipes").then((result) => result.rows)
  .catch((error) => {
        console.error(error);
        
      });
}   

// function getIngredientsForRecipes(){
//   return db.query("SELECT name FROM ingredients).then((result) => console.log(result))
//   .catch((error) => {
//         console.error(error);
        
//       });
  
      // IN (SELECT ingredient_id FROM match_recipe_ingredients WHERE recipe_id = 'B'"
  // WHERE (recipe id) IN (SELECT name FROM Recipes)"
// }
module.exports = { getRecipes };
