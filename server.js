//requiring express for our server
const express = require('express');

// const apiRoute = require('./routes/apiRoutes');
// const htmlRoute = require('./routes/htmlRoutes');
// creating express server
const app = express();

// sets initial port
const PORT = process.env.PORT || 8080;

// setting up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

// mapping out routes for our server
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
//app.use('/api', apiRoute);
// start the server
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
});
