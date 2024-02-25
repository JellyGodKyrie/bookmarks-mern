const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')



router.post('/', userCtrl.signUp, userCtrl.respondWithToken) // Sign Up User
router.post('/login', userCtrl.login, userCtrl.respondWithToken) // Login User
router.get('/bookmarks', checkToken, ensureLoggedIn, userCtrl.getBookmarksByUser, userCtrl.respondWithBookmarks) // Get Bookmarks By The User


module.exports = router