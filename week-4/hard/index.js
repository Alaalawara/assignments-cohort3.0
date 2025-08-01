const express = require("express");
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();
const jsonParser = bodyParser.json()

const app = express();
const port = process.env.PORT || 3000;

const todos = [];

// app.use(express.json());
app.use(bodyParser.json());

app.get("/healthy", (req, res) => res.send("I am Healthy"));

//just experiment-------------------------------------------
app.get("/gettodo", (req, res) => {
    res.json({
        todos
    })
});

app.post("/addtodo", (req, res) => {
    let { id, title } = req.body;
    id = Number(id);
    todos.push({
        id,
        title
    })
    res.status(200).json({
        message: "todo added succesfully",
        todo: { id, title }
    })
})

app.put("/updatetodo/:id", (req, res) => {
    const todoId = Number(req.params.id);
    const todo = todos.find((i) => i.id === todoId)
    if (!todo) {
        return res.status(404).json({ message: "todo not found" });
    }
    if (!req.body.title) {
        return res.status(400).json({ message: "New title is required." });
    }
    todo.title = req.body.title;
    res.status(200).json(todo);
})

app.delete("/deletetodo/:id", (req, res) => {
    const todoId = Number(req.params.id);
    const index = todos.find((i) => i.id === todoId)
    if (index === -1) {
        return res.status(404).json({ message: "todo not found" });
    }
    const removed = todos.splice(index, 1);
    res.status(200).json({ message: "todo deleted", todo: removed[0] });
})
//---------------------------------------------------------

//  start writing your routes here

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));

