// pull data here

const noteData = require('../db/db.json');

console.log(noteData)

module.exports = (app) => {

    app.get('/api/notes', (req, res) => { 
        res.json(noteData)
    });

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.json(true)
    });

    app.post('/api/clear', (req, res) => {
        noteData.length = 0;

        res.json({ ok: true });
    });
};