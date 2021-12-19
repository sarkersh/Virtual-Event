const express = require('express');
const router = express.Router();
const userController = require('../controller/users');


router.get('/', userController.getUsers);
router.post('/register', userController.registerUsers);



module.exports = router;
