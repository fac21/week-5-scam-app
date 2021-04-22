const express = require("express");
const server = express();

const homepageFile = require("./src/handlers/homepage.js");

const staticHandler = express.static("public");
server.use(staticHandler);

 server.get("/", homepageFile.homepageHandler);
 const addRecipe = require("./src/handlers/addreceipe.js")

// server.get("/add-recipe", addRecipe);




const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log (`Listening on http://localhost:${PORT}`));
