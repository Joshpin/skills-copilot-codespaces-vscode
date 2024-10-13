//Create web server
//create a server with express
const express = require('express');
const app = express();
const port = 3000;

//import the comments module
const comments = require('./comments');

//create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getAll());
});

//create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.json(comments.getComment(req.params.id));
});

//start the server
app.listen(port, () => {
    console.log('Server started on http://localhost:' + port);
});