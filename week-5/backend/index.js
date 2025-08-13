const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Peoples!')
})

app.get('/addition', (req, res) => {
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
        message:  `substraction of 2 number is ${minus}`,
    })
})
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.a);
    const num2 = parseFloat(req.query.b);
    const multiply = num1 * num2;
    res.status(200).json({
        message:  `multiplication of 2 number is ${multiply}`,
    })
})
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.a);
    const num2 = parseFloat(req.query.b);
    const divide = num1 / num2;
    res.status(200).json({
        message:  `Division of 2 number is ${divide}`,
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
