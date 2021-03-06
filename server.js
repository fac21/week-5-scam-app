const express = require("express");
const server = express();
const homepageFile = require("./src/handlers/homepage.js");
const staticHandler = express.static("public");
const addRecipe = require("./src/handlers/addreceipe.js")
const PORT = process.env.PORT || 3000;
const bodyParser = express.urlencoded();

server.use(staticHandler);

server.get("/", homepageFile.homepageHandler);
server.get("/add-recipe", addRecipe.addRecipe);

server.post("/recipe-added", bodyParser, addRecipe.recipeAdded)

server.post("/recipe-search", homepageFile.postForm); 

// server.get("/add-recipe", addRecipe);

server.listen(PORT, () => console.log (`Listening on http://localhost:${PORT}`));
