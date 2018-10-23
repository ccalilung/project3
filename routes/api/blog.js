const router = require('express').Router();
const controller = require('../../controller/controller');

module.exports = router;

router.route('/show').get(controller.findAll)
router.route('/write').post(controller.createEntry)