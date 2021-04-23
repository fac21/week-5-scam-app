const db = require("./connection.js");

function getRecipes(request) {
 return db.query("select recipes.name from recipes where id in (select match_recipe_ingredients.recipe_id from match_recipe_ingredients where id IN (select ingredients.id from ingredients where name = 'Carrots'));
 , [search-filter])
.then((result) => result.rows)
//Catching any errors
.catch((error) => {
    console.error(error);
    // do stuff with the error here
  });
}


// module.exports = { getUsers };
//We will need to update this function with our own recipe query
