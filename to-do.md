### TO DO

## Adding in static files ie css images

1. Create a public/style.css file with some example CSS.

2. Configure the middleware to serve this directory in server.js:

```
const staticHandler = express.static("public");

server.use(staticHandler);
```

### In our Forms:

- Create a middleware for access form data posted by user:

```
const bodyParser = express.urlencoded();

server.post("/submit", bodyParser, (request, response) => {
  console.log(request.body);
  response.send("thanks for submitting");
});

```

## TESTING

- Reset our database for Cypress by going in cypress/plugins/index.js and adding:

```
module.exports = (on, config) => {
  on("task", {
    resetDb: () => {
      console.log("Resetting DB...");
      //We have to return something or Cypress gets mad
      return null;
    },
  });
};

```

- In cypress/integration/testing add in:

```
beforeEach(() => {
  cy.task("resetDb");
});
```

- Create a workshop/database/build.js file. We need to read the contents of init.sql, so we can send it to our database as a query:

```
const fs = require("fs");
const path = require("path");
const db = require("./connection.js"); 

const initPath = path.join(__dirname, "init.sql");
const initSQL = fs.readFileSync(initPath, "utf-8");

function build() {
  return db.query(initSQL);
}

module.exports = build;
```

-  Import this function in our Cypress task (cypress/plugins/index.js) and use it to reset the database.

```
const build = require("../../database/build.js");

module.exports = (on, config) => {
  on("task", {
    resetDb: () => {
      return build();
    },
  });
};

```
### MODULARISING (separating) Query Database in a seperate file!

Query database in a different file from route handlers.IE Create a new file workshop/database/model.js. 

Probably need to also add in error checking

``` 
const db = require("./connection.js");

function getUsers() {
  return db.query("SELECT * FROM users").then((result) => result.rows);
}

module.exports = { getUsers };
```

 Maybe you can also add an error catching function: 

```
.catch((error) => {
    console.error(error);
    //Tells you exact line error occurs on
  });
```


2. After you import model, you also import query and then use it in route handler in file routes/home.js:

```
const model = require("../database/model.js");

function get(request, response) {
  model.getUsers().then((users) => {
    // ...more code 
  });
}
```


