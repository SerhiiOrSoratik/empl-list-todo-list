const express = require('express');
const router = express.Router();

const employee = require('./employee.routes');
const todolist = require('./todolist.routes');

router.use('/employee', employee);
router.use('/todolist', todolist);

module.exports = router;