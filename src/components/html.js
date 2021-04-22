function homepageHtml(recipes, ingredientList){
    let html = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charse ="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Scam Recipes</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <img src="foodpic.jpg" alt="picture of a variety of food">
            <h1>Welcome to Scam Recipes</h1>
        </header>
        <main>
            
            <form method="POST">
                <label for = 'ingredient'></label>
                <input id = 'ingredient' name="ingredient" placeholder = 'Type an ingredient'/>
                
                <input type="submit" value = 'Search'>
                <!-- <button>Submit</button> -->
            </form>
            <section>
                <article></article>
            </section>
            <section>
                <input type="button" class="" onclick="location.href='/add-recipe';" value="Add a recipe" />
            </section>

            <ul>${recipes}</ul>
            <ul>${ingredientList}</ul>
        </main>
    </body>
</html>
    `
    return html;
};

function addRecipeHtml(){
    let html = `
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
    </html>`
    return html;
}


module.exports = { homepageHtml:homepageHtml, addRecipeHtml:addRecipeHtml};