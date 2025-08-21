const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser= require('body-parser')

app.use(bodyParser.json());

app.use(cors({
    domains:"http://localhost:5004/"
})); 



function middleware(req, res, next) {
    let time = new Date().toUTCString();
    console.log("Addition api call at "+time);
    console.log("Method is "+ req.method);
    console.log("Host is "+ req.hostname);
    console.log("Request from "+ req.url);
    if (req.headers.id == 1234) {
        next();
    } else {
        res.status(400).json({
            message: "user not found"
        })
    }
}

app.post('/name',(req,res)=>{
    console.log(req.body);
    if(req.body.name == 'Joe'){
        res.status(200).json({
            message:"Hello You!"
        })
    }else{
        res.status(400).json({
            message:"bye bye bye"
        })
    }
})

app.get('/', (req, res) => {
    console.log("Host is "+ req.hostname);
    console.log("Request from "+ req.url);
    res.status(200).json({message:"Hello Peoples!"})
})

app.get('/addition', middleware, (req, res) => {
    const num1 = parseFloat(req.query.a);
    const num2 = parseFloat(req.query.b);
    const sum = num1 + num2;
    res.status(200).json({
        message: `addition of 2 number is ${sum}`,
    })
})

app.get('/addition/:a/:b', (req, res) => {
    const num1 = parseFloat(req.params.a);
    const num2 = parseFloat(req.params.b);
    const sum = num1 + num2;
    res.status(200).json({
        message: `addition of 2 number is ${sum}`,
    })
})

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.a);
    const num2 = parseFloat(req.query.b);
    const minus = num1 - num2;
    res.status(200).json({
        message: `substraction of 2 number is ${minus}`,
    })
})
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.a);
    const num2 = parseFloat(req.query.b);
    const multiply = num1 * num2;
    res.status(200).json({
        message: `multiplication of 2 number is ${multiply}`,
    })
})
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.a);
    const num2 = parseFloat(req.query.b);
    const divide = num1 / num2;
    res.status(200).json({
        message: `Division of 2 number is ${divide}`,
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
