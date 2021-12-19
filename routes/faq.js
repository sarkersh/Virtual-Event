const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.render('faq', {
    title: 'FAQ'
  });
});

module.exports = router;