const express = require('express');
const userController = require("../controller/users");
const router = express.Router();

/* GET contact page. */
router.get('/', async (req, res, next) => {

  res.render('contact', {
    title: 'Contact'
  });

});


//handle contact form submission
router.post('/', userController.submitContactMessage);

module.exports = router;
