const router = require('express').Router();
const controller = require('../../controller/controller');

module.exports = router;

router.route('/:search').get(controller.findRecipes)