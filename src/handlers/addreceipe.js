const html = require("../components/html.js");
const db = require('../../database/connection.js');

function addRecipe (request, response) {
    let newHtml = html.addRecipeHtml();
    response.send(newHtml);
    }
      
module.exports = {addRecipe: addRecipe};