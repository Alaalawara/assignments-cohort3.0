const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();

const todos=[];

// todo Routes
router.post('/', (req, res) => {
    if (!id || !title) {
        return res.status(400).json({ error: "id and title are required" });
    }
    todos.push({
        id,
        title
    })
});

router.put('/update', adminMiddleware, (req, res) => {
   
});

router.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


router.get('/', adminMiddleware, (req, res) => {
    res.json({
        todos
    })
});

router.get('/:id', adminMiddleware, (req, res) => {
    
});

module.exports = router;