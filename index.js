const express = require('express');
const app = express();
const router = require('./routes/employee.routes')

app.use(express.json());
app.use('/', router);

app.listen(3000);