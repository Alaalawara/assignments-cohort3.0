import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { getAllTodo, createTodo, updateTodo, deleteTodoById, searchTodo } from './routes/todo.js';
const app = express();
const JWT_SECRET = "randomstring";
const PORT = 3001;

app.use(cors());
app.use(express.json());

const users = [];
//{ username:abc@gmail.com, password:abc#123
//}

function generatetoken() {
  const options = ['a', 'b', 'c', 'd', 'e', '1', '2', '3', '4', '5'];
  let token = ''
  for (let i = 0; i <= 10; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}


// Get all todos
app.get('/todos', getAllTodo);

// Add a new todo
app.post('/todos', createTodo);

// Update a todo
app.put('/todos/:id', updateTodo);

// Delete a todo
app.delete('/todos/:id', deleteTodoById);

// Search todos
app.get('/todos/search', searchTodo); // search route

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((user) => user.username === username)) {
    res.status(400).json({
      message: "you are already singup"
    })
  }

  users.push({
    username: username,
    password: password,
  })
  res.status(200).json({
    message: "you are signup succesfully"
  })
  console.log(users);
})

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    const token = jwt.sign({
      username: user.username, //username:abc@123
    }, JWT_SECRET);

    // user.token = token;

    res.send({
      token
    })
  } else {
    res.status(403).send({
      message: "Invalid username or password"
    })
  }
  console.log(users);
})

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodeInformation = jwt.verify(token, JWT_SECRET); //{username:abc@123}

  const username = decodeInformation.username;
  const user = users.find(u => u.username === username);
  if (user) {
    res.status(200).json({
      username: user.username
    })
  } else {
    res.status(401).json({
      message: "unauthorized"
    })
  }
})

// with normal stateful data
// app.get("/me", function (req, res) {
//   const token = req.headers.token;
//   const user = users.find(u => u.token === token)

//   if (user) {
//     res.status(200).json({
//       username: user.username
//     })
//   } else {
//     res.status(401).send({
//       message: "unauthorized"
//     })
//   }
// })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});