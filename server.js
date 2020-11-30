const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.route('/movies')
    .get(function (request, response) {
        const movies = [{
            id: 1,
            name: 'Forrest Gump'
        }, {
            id: 2,
            name: 'The Green Mile'
        }];

        response.json(movies);
    });

const server = app.listen(port, function() {
    console.log('Server started on port:   ' + port);
});

module.exports = server;