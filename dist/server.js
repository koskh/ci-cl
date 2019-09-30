const express = require('express');

const port = process.env.PORT || 3000;

const server = express();
server.use(express.static('build'));

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
