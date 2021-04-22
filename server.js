const express = require("express");
const server = express();
const homepageFile = require("./src/handlers/homepage.js");
const staticHandler = express.static("public");
const addRecipe = require("./src/handlers/addreceipe.js")
const PORT = process.env.PORT || 3000;


server.use(staticHandler);

server.get("/", homepageFile.homepageHandler);
server.get("/add-recipe", addRecipe.addRecipe);
//server.get("/recipe-added", (request, response) => {response.send("<h1>Please add a recipe!</h1>")});

server.post("/recipe-added", addRecipe.recipeAdded);
server.post("/recipe-search", homepageFile.postForm); 

server.listen(PORT, () => console.log (`Listening on http://localhost:${PORT}`));
