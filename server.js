const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const homepageHandler = require("./routes/homepage.js");

server.get("/", homepageHandler);





const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log (`Listening on http://localhost:${PORT}`));