"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const jsonBody = express_1.default.json();
app.use(jsonBody);
app.get('/', (req, res) => {
    // res.send({message: 'Hello world'})
    // res.json({message: 'Hello world'}) // better use method json
    // res.json(1500) // better use method json
    res.sendStatus(500); // better use method json
});
const cities = [
    { id: 1, title: 'Moscow' },
    { id: 2, title: 'London' },
    { id: 3, title: 'New York' },
    { id: 4, title: 'Astana' },
];
app.get('/address', (req, res) => {
    if (req.query.title) {
        const foundCity = cities.filter(city => city.title === req.query.title);
        console.log(foundCity);
        if (!foundCity || foundCity.length === 0) {
            res.sendStatus(404);
        }
        else {
            res.json(foundCity);
        }
    }
    else {
        res.json(cities);
    }
});
app.post('/address', (req, res) => {
    if (!req.body.title) {
        // res.json('title is required')
        res.status(201).json('title is required');
        return;
    }
    else {
        const newCity = {
            id: +(new Date()),
            title: req.body.title,
        };
        cities.push(newCity);
        res.json(cities);
    }
});
app.get('/address/:id', (req, res) => {
    const findCity = cities.find(city => city.id === +req.params.id);
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
