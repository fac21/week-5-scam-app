const html = require('../components/html.js')


function homepageHandler(request, response) {
    const homepage = html.homepageHtml();
    console.log(homepage)
    response.send(homepage);
}

module.exports =  { homepageHandler };
 