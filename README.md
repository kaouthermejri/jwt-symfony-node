JWT-Symfony-Node.JS
==================

### Requirements
* [Composer](https://getcomposer.org/)
* [Node.js & npm](https://nodejs.org/en/)

### Optional tool
* nodemon `npm install -g nodemon`

### Instructions
* Clone this repository
* Install all Composer & Node.js dependencies  with `composer build-project` script 
*  Run with built-in web server with `public` directory as a specific document root directory `php -S localhost:8000 -t public/`
*  Run Node.js server `node server.js` ( or `nodemon server.js` ) in the `public/websocket` directory