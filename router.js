const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')

// User routers
router.get('/', userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

// Post routers
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateSCreen)
router.post('/create-post', userController.mustBeLoggedIn, postController.createPost)
router.get('/post/:id', postController.viewSingle)

module.exports = router