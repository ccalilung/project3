const router = require('express').Router();
const nutritionRoutes = require('./nutrition');
const blogRoutes = require('./blog');
const authRoutes = require('./auth');
const recipeRoutes = require('./recipe');
const foodtrckrRoutes = require('./foodtrckr');

// now the route is /api/user and only pull from the ./user.js file
router.use('/nutrition', nutritionRoutes);
router.use('/blog', blogRoutes);
router.use('/auth', authRoutes);
router.use('/recipe', recipeRoutes);
router.use('/foodtrckr', foodtrckrRoutes);

module.exports = router;
