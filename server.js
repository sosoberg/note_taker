const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function to display home page
const displayHome = (res) => {
    fs.readFile(`${ __dirname }/public/index.html`, (err, data) => {
        if(err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.end('FILE CORRUPT')
        }

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data);
    })
}

const displayNotes = (res) => {
    fs.readFile(`${ __dirname }/public/notes.html`, (err, data) => {
        if(err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.end('FILE CORRUPT')
        }

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data);
    })
}

const handler = (req, res) => {
    const path = req.url;

    switch (path) {
        case '/notes':
            return displayNotes(res);
        default:
            return displayHome(res);
    }
}



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
