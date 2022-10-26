"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    // res.send({message: 'Hello world'})
    // res.json({message: 'Hello world'}) // better use method json
    // res.json(1500) // better use method json
    res.sendStatus(500); // better use method json
});
app.get('/address', (req, res) => {
    res.json([{ id: 1, title: 'Moscow' }, { id: 2, city: 'London' }, {
            id: 3,
            city: 'New York'
        }, { id: 4, city: 'Astana' },]);
});
app.get('/address/:id', (req, res) => {
    const findCity = [
        { id: 1, title: 'Moscow' },
        { id: 2, city: 'London' },
        { id: 3, city: 'New York' },
        { id: 4, city: 'Astana' },
    ].find(city => city.id === +req.params.id);
    if (findCity) {
        res.json(findCity);
        return;
    }
    else {
        res.sendStatus(404);
    }
});
app.get('/users', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('User empty!!!!!');
    }
    else {
        res.send('Get users!!!!!');
    }
});
app.post('/users', (req, res) => {
    res.send('Create user');
});
app.listen(port, () => {
    console.log(`Example app listening ${port}`);
});
