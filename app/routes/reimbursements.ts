// imports and variables
import { Router } from 'express';
import reimbursementController from '../controllers/reimbursements-controller';
const routerR = Router();

// CRUD routes for reimbursements
routerR.route('/')
    .post(reimbursementController.addOne)
    .patch(reimbursementController.update);

// reimbursements is 1 to 1 with userId
routerR.route('/author/:id')
    .get(reimbursementController.getAuthor);

// reimbursements is 1 to 1 with statusId 
routerR.route('/status/:id')
    .get(reimbursementController.getStatus);
    
export default routerR;