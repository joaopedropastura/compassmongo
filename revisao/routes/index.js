const bodyParser = require("body-parser");
const carteira = require('./wallet')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        carteira
    )
}
