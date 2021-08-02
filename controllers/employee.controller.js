const db = require('../db');
const {main} = require('../models/employee.model')

class EmployeeController {
    
    async getEmployees(req, res) {
        const variant = req.params.variant;
        const employees = await db.query('SELECT * FROM empl_list');
        
        res.end(main(employees.rows, variant));
    }
}

module.exports = new EmployeeController();