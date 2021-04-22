const html = require('../components/html.js');
const db = require('../../database/connection.js');

function homepageHandler(request, response) {
    let newHtml = html.homepageHtml("");
    db.query("SELECT * FROM USERS").then((result) => console.log(result.rows));

    response.send(newHtml);
}    

module.exports = {homepageHandler:homepageHandler};
 
