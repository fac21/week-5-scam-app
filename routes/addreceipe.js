const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/stylesheet.css" />
        <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
        <meta name="description" content="">
        <title>Porky Pies | Add blog</title>
      </head>
      <body class="flex__column margin-top-4 stack">

      <header>
     
      <nav class="flex__row ">
      <a class="content_link" href="/view-blogs">
              View Blog
          </a>
          <a class="content_link" href="/">
              Home
          </a>
      </nav>
      <h1 class="margin-top-4">Add Recipe</h1>
      </header>
        <main class="content">
        <form class="flex__column stack-sm " method="POST" id="blog-form" action="/view-blogs">
          <label for="username">Username</label>
          <input id="username" name="username" required>
          <label for="recipe_name">Recipe Name</label>
          <input id="recipe_name" name="recipe_name" required>
          <label for="ingredients">Ingredients</label>
          <input id="ingredients" name="ingredients" required>
          <button class="form__button" type="submit"> Post</button>
        </form>
        
        </main>  
      </body>
    </html>`;

function addRecipe (request, response) {
    response.send(html);
    }
      
module.exports = {addRecipe};