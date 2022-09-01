/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const express = require("express");
const app = express();
const http = require("http");
const morgan = require("morgan");
const path = require("path");
const mustacheExpress = require("mustache-express");
const publicDirectoryPath = path.join(__dirname, "../app");
const viewsPath = path.join(__dirname, "../app/views");
const port = 3035;
const cors = require("cors");
const routes = require("./routes/index")
// setup handlebars engine and views location
app.use(cors());
app.engine(".mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", viewsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// middlewares
app.use(morgan("dev"));

/**
 * ROUTES Endpoints
 *
 * I create a endpoints for all DATA, and Search the data
 *
 */
routes(app);


/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(app).listen(port);

module.exports = app;
