const html = require('../components/html.js')


function homepageHandler(request, response) {
    const homepage = html.homepageHtml();
    response.send(homepage);
}

module.exports =  { homepageHandler: homepageHandler };
