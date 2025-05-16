const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/About', (req, res) => {
    res.send('email: emailchave@email.com');
});

app.get('/Features', (req, res) => {
    res.send('Brabo do PDD');
});

app.get('/Contact', (req, res) => {
    res.send('Meu número de telefone é: 11999999999');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
