const Router = require('express');
const todolist = require('../controllers/todolist.controller');
const router = new Router();

router.get('/', (req, res) => {
    todolist.getTasks(req, res);
});

router.get('/:id', (req, res) => {
    todolist.getTask(req, res);
});

router.post('/', (req, res) => {
    todolist.createTask(req, res);
});

router.patch('/:id', (req, res) => {
    todolist.updateTask(req, res);
});

router.put('/:id', (req, res) => {
    todolist.putTask(req, res);
})

router.delete('/:id', (req, res) => {
    todolist.deleteTask(req, res);
});



module.exports = router;