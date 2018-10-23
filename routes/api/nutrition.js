const router = require('express').Router();
const controller = require('../../controller/controller');

module.exports = router;

router.route('/dbnum/:numb').get(controller.findFoodIngredients)
router.route('/:name').get(controller.findFoodId)