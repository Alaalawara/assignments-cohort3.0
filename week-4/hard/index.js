const express = require("express");
const dotenv = require("dotenv")
dotenv.config()

const app = express();

const todoRouter = require('./routes/todo')

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', todoRouter);

app.get("/healthy", (req, res) => res.send("I am Healthy"));

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));

