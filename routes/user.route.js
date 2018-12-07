const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/create', userController.user_create)
router.get('', userController.user_get_all)
router.get('/:id', userController.user_get_by_id);

module.exports = router;