let todos = []; // in memory space

export async function getAllTodo(req, res, next) {
    res.status(200).json({
        todos
    })
    next();
}

export async function createTodo(req, res, next) {
    //  write here
}

export async function updateTodo(req, res, next) {
    //  write here
}

export async function deleteTodo(req, res, next) {
    //  write here
}

export async function deleteTodoById(req, res, next) {
    //  write here

}

export async function searchTodo(req, res, next) {
    //  write here
}

