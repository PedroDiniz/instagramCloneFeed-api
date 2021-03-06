const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/getposts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/post/:id/like', LikeController.like);

module.exports = routes;
