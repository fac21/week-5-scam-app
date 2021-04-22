const html = require('../components/html.js')

function homepageHandler(request, response) {
    let newHtml = html.homepageHtml("")
    response.send(newHtml);
}    

module.exports = {homepageHandler:homepageHandler};
 
