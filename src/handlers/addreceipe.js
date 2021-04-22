const html = require("../components/html.js")

function addRecipe (request, response) {
    let newHtml = html.addRecipeHtml();
    response.send(newHtml);
    }
      
module.exports = {addRecipe};