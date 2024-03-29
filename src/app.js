const express = require("express");
require("dotenv").config();
require("./db/mongoose");
require("dotenv").config();
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;