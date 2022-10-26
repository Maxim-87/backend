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
    res.send('Hello world');
});
app.get('/home', (req, res) => {
    res.send('Home page!!!');
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
