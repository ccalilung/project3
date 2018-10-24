const router = require('express').Router();
const controller = require('../../controller/controller');

module.exports = router;

router.route('/track').post(controller.addFoodEntry)
router.route('/graph').get(controller.createGraph)