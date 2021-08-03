const db = require('../db');

class TodoList {

    async createTask(req, res) {
        const {id, title, done, due_date} = req.body;
        const newTask = await db.query(`INSERT INTO todolist (id, title, done, due_date) VALUES ($1, $2, $3, $4) RETURNING *`, [id, title, done, due_date]);
        res.status(201);
        res.json(newTask.rows);
    }

    async getTasks(req, res) {
        const tasks = await db.query('SELECT * FROM todolist;');
        res.status(201);
        res.json(tasks.rows)
    }

    async getTask(req, res) {
        const task = await db.query(`SELECT * FROM todolist WHERE id=${req.params.id};`);
        res.status(201);
        res.json(task.rows)
    }

    async updateTask(req, res) {
        let task = {};
        if (req.body.title && !req.body.done && !req.body.due_date) {
            task = await db.query(`UPDATE todolist SET title=$1 WHERE id=${req.params.id} RETURNING *`, [req.body.title]);
            res.status(200);
            res.json(task.rows);
        }
        else if (!req.body.title && req.body.done && !req.body.due_date) {
            task = await db.query(`UPDATE todolist SET done=$1 WHERE id=${req.params.id} RETURNING *`, [req.body.done]);
            res.status(200);
            res.json(task.rows);
        }
        else if (!req.body.title && !req.body.done && req.body.due_date) {
            task = await db.query(`UPDATE todolist SET due_date=$1 WHERE id=${req.params.id} RETURNING *`, [req.body.due_date]);
            res.status(200);
            res.json(task.rows);
        }
        else {
            res.status(400);
            res.end('Bad request');
        } 
    }

    async putTask(req, res) {
        const {title, done, due_date} = req.body;
        const task = await db.query(`UPDATE todolist SET title=$1, done=$2, due_date=$3 WHERE id=${req.params.id} RETURNING *`, [title, done, due_date]);
        res.status(201);
        res.json(task.rows);
    }

    async deleteTask(req, res) {
        await db.query(`DELETE FROM todolist WHERE id=${req.params.id};`);
        res.status(200);
        res.end();
    }
}

module.exports = new TodoList();