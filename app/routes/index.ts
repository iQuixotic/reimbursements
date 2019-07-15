// const path = require("path");
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const userRoutes = require('./users.ts');
const loginRoutes = require('./login.ts');
const reimbursementRoutes = require('./reimbursements.ts');
import verifyToken from '../utils/logins/JWT';

// tell the application when to use these routes
router.use('/users', verifyToken, userRoutes);
router.use('/login', loginRoutes);
router.use('/reimbursements', verifyToken, reimbursementRoutes);

module.exports = router;