const stateController = require('../Controllers/state');
const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/state/add', auth, stateController.addState);
router.post('/state/get', auth, stateController.getState);
router.post('/state/getAll', stateController.getAllState);

module.exports = router;
