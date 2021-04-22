function homepageHtml(){
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charse ="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Scam Recipes</title>
        <link rel="stylesheet" href="main-style.css">
    </head>
    <body>
        <header>
            <img src="#.png" alt="#">
            <h1>Welcome to Scam Recipes</h1>
        </header>
        <main>
            <p>#</p>
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
                <input type="button" class="" onclick="location.href='https://whispering-sierra-27034.herokuapp.com/addrecipe';" value="Add a recipe" />
            </section>
        </main>
    </body>
</html>
    `
};


module.exports = { homepageHtml };