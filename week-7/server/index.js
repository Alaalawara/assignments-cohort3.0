//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const { UserModel, TodoModel } = require('./db');
dotenv.config();
const app = express();

app.use(express.json());

const JWT_SECRERT = "todoapplication";  // This should be in an environment variable in a real application
const port = process.env.PORT || 3000;



const authMiddleware = (req, res, next) => {
    const token = req.headers.token;
    const decodeData = jwt.verify(token, JWT_SECRERT);

    if(decodeData){
        req.userId= decodeData.id;
        next();
    }else{
        res.status(403).json({
            message:"unauthorized user"
        })
    }
};

// Connect to MongoDB
mongoose.connect('mongodb+srv://swarajsanap23:6ioFIpS9BUBkjVnv@cluster0.lm8os5q.mongodb.net/not-todo-db');


// User routes
app.post('/signup', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        username: username,
        password: password,
        name: name,
    })

    res.json({
        message: "You are signed up"
    })
});

app.post('/Signin', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({
        username: username,
        password: password,
    })

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRERT);
        res.json({
            token
        });
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});

app.post('/todo', authMiddleware, async function(req, res) {
    const userId=req.userId;
    const title= req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done,
    })

    res.json({
        message:"todo created";
    })
});

app.get('/todos', authMiddleware, (req, res) => {
    const userId=req.userId;

    const todos = TodoModel.findOne({
        userId
    } )

    res.json({
       todos
    })
});

app.get('/me', (req, res) => {
});

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});