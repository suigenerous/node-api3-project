const express = require('express');
const userRoutes = require('./users/userRouter');
const postRoutes = require('./posts/postRouter');

const server = express();

server.use('/api/users', userRoutes);
server.use('/api/posts', postRoutes);


module.exports = server;
