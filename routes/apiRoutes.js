// pull data here
const uniqid = require('uniqid')
const noteData = require('../db/db.json');

console.log(noteData)

module.exports = (app) => {

    app.get('/api/notes', (req, res) => { 
        res.json(noteData)
    });

    app.post('/api/notes', (req, res) => {
        let id = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        }
        noteData.push(id);
        res.json(true)
    });

    app.post('/api/clear', (req, res) => {
        noteData.length = 0;

        res.json({ ok: true });
    });
};