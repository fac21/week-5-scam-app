const html = require('../components/html.js')

function homepageHandler(request, response) {
    response.send(html.homepageHtml);
}

module.exports = homepageHandler;
 