// const express = require('express')
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/home', (req, res) => {
    res.send('Home page!!!')
})

app.get('/users', (req, res) => {
    const a = 4;
    if(a > 5) {
        res.send('User empty!!!!!')

    } else {
        res.send('Get users!!!!!')
    }
})

app.post('/users', (req, res) => {
    res.send('Create user')
})

app.listen(port, () => {
    console.log(`Example app listening ${port}`)
})
