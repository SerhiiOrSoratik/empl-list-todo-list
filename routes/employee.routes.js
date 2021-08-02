const Router = require('express');
const employeeController = require('../controllers/employee.controller');
const router = new Router();

router.get('/:variant', (req, res) => {
     employeeController.getEmployees(req, res);
});

module.exports = router;