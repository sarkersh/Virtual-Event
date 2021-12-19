const express = require('express');
const router = express.Router();

/* GET game page. */
router.get('/', async (req, res, next) => {
 res.render('game', {
  title: 'The Guessing Game'
 });

});


module.exports = router;