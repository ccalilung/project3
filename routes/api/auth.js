const router = require('express').Router();
const controller = require('../../controller/controller');

module.exports = router;

router.route('/createuser').post(controller.createUser)
router.route('/authcheck').post(controller.verifyAuth)