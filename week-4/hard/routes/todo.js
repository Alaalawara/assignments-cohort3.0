const { Router } = require("express")
const adminMiddleware = require("../middleware/user");
const router = Router();

const todos = [];

// todo Routes
router.post('/createtodo',adminMiddleware, (req, res) => {
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
});

router.put('/updatetodo/:id',adminMiddleware, (req, res) => {
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
});

router.delete('/delete',adminMiddleware, (req, res) => {
    const Truncate = todos.length = 0;
    res.json({
        message: `successfully delete all items: ${Truncate}`
    })
});

router.delete('/deletetodo/:id',adminMiddleware, (req, res) => {
    const todoId = Number(req.params.id);
    const index = todos.findIndex((i) => i.id === todoId)
    if (index === -1) {
        return res.status(404).json({ message: "todo not found" });
    }
    const removed = todos.splice(index, 1);
    res.status(200).json({ message: "todo deleted", todo: removed[0] });
});


router.get('/gettodo', adminMiddleware,(req, res) => {
    res.json({
        messgage: todos
    })
});

router.get('/gettodo/:id',adminMiddleware, (req, res) => {
    const todoId = Number(req.params.id);
    const findtodo = todos.find((todo) => todo.id === todoId);
    if (!findtodo) {
        res.status(404).json({ message: "todo not found" })
    }
    res.json({
        message: findtodo
    })
});

module.exports = router;