const path = require('path');
// const express = require('express');
import express, { Express, Request, Response } from 'express';
import { books } from './db/books';

const app: Express = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello Express.js</h1>')
});

app.get('/api/books', (req: Request, res: Response) => {
    res.json(books)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));