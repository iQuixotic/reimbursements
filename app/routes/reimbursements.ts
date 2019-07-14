const routerR = require('express').Router();
const reimbursementController = require('../controllers/reimbursements-controller.ts');

// CRUD routes for reimbursements
routerR.route('/')
    .post(reimbursementController.addOne)
    .patch(reimbursementController.update);

// reimbursements is 1 to 1 with userId
routerR.route('/userId/:id')
    .get(reimbursementController.getAuthor);

// reimbursements is 1 to 1 with statusId 
routerR.route('/status/:id')
    .get(reimbursementController.getStatus);
    
module.exports = routerR;