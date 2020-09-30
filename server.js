const express = require('express');
const userRoutes = require('./users/userRouter');
const postRoutes = require('./posts/postRouter');

const server = express();

const logger = (req, res, next) => {
    const time = Date.now();
    console.log(req.method, req.url, time);
    next();
};

server.use(logger);
server.use('/api/users', userRoutes);
server.use('/api/posts', postRoutes);


module.exports = server;
