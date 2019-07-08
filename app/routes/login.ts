const routerL = require('express').Router();
const loginController = require('../controllers/login-controller.ts');

// route for users to login
routerL.route('/')
    .post(loginController.login)
    
module.exports = routerL;