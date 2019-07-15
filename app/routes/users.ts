// import { verify } from "crypto";
// import verifyToken from '../utils/logins/JWT';
const routerU = require('express').Router();
const usersController = require('../controllers/users-controller.ts');

// CRUD for users info
routerU.route('/')
    .get(usersController.getAll)
    .patch(usersController.update);

routerU.route('/:id')
    .get(usersController.getOne);
    
routerU.route('/register')
    .post(usersController.addOne);

module.exports = routerU;