const html = require('../components/html.js')

function homepageHandler(request, response) {
    let newHtml = html.homepageHtml("")
    response.send(newHtml);
}    

function postForm(request, response){
    
    //take the input
    //query the database for the ingredient id
    //post selected list of items (recipe names) that match this ingredient 
    //if no match, post "Starve"
}

module.exports = {
    homepageHandler:homepageHandler, 
    postForm: postForm};
 
