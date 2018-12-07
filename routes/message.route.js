const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message.controller');

router.post('/create', messageController.message_create)
router.get('', messageController.message_get_all)
router.get('/:id', messageController.message_get_by_id);
router.get('/user/:id', messageController.message_get_all_from_user);

module.exports = router;