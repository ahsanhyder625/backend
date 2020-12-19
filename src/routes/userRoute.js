const userController = require('../Controllers/user');
const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/login', userController.loginUser);
router.post('/add', userController.signUpUser);
router.post('/logout', auth, userController.logoutUser);

module.exports = router;
