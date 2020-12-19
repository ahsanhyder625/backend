const childController = require('../controllers/childController');
const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/child/add', auth, childController.addChild);
router.post('/child/get', auth, childController.getChild);
module.exports = router;
