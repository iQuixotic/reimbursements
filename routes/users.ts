const routerU = require('express').Router();
const usersController = require('../controllers/users-controller.ts');

// CRUD for users info
routerU.route('/')
    .get(usersController.getAll)
    .patch(usersController.update);

routerU.route('/:id')
    .get(usersController.getOne);
    
module.exports = routerU;