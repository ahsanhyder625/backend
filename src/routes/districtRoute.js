const districtController = require('../Controllers/district');
const router = require('express').Router();
const auth = require('../middleware/auth');

router.post('/district/add', auth, districtController.addDistrict);
router.post('/district/get', auth, districtController.getDistrict);
router.post('/district/getAll', districtController.getAllDistrict);

module.exports = router;
