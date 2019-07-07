// const path = require("path");
const router = require('express').Router();
const userRoutes = require('./users.ts');
const loginRoutes = require('./login.ts');
const reimbursementRoutes = require('./reimbursements.ts');

// tell the application when to use these routes
router.use('/users', userRoutes);
router.use('/login', loginRoutes);
router.use('/reimbursements', reimbursementRoutes);

module.exports = router;