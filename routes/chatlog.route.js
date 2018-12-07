const express = require('express');
const router = express.Router();

const chatlogController = require('../controllers/chatlog.controller');

router.post('/create', chatlogController.chatlog_create)
router.get('', chatlogController.chatlog_get_all)
router.get('/:id', chatlogController.chatlog_get_by_id);

module.exports = router;