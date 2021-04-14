//requiring express for our server
const express = require('express');

// creating express server
const app = express();

// sets initial port
const PORT = process.env.PORT || 8000;

// setting up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mapping out routes for our server
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// start the server
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
});
