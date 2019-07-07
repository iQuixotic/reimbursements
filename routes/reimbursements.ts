const routerR = require('express').Router();
const reimbursementController = require('../controllers/reimbursements-controller.ts');

// CRUD routes for reimbursements
routerR.route('/')
    .post(reimbursementController.add)
    .patch(reimbursementController.update);

// reimbursements is 1 to 1 with userId
routerR.route('/userId/:userId')
    .get(reimbursementController.getAuthor);

// reimbursements is 1 to 1 with statusId 
routerR.route('/status/:statusId')
    .get(reimbursementController.getStatus);
    
module.exports = routerR;