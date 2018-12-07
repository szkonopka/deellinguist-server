const Chatlog = require('../models/chatlog.model');

exports.chatlog_create = function(req, res) {
    let chatlog = new Chatlog({
        users: req.body.users,
        messages: req.body.messages
    });

    chatlog.save(function(err) {
        if(err) 
        {
            return next(err);
        }

        res.send('Chatlog created successfully!');
    })
}

exports.chatlog_get_all = function(req, res) {

}

exports.chatlog_get_by_id = function(req, res) {
    Chatlog.findById(req.params.id, function(err, chatlog) {
        if(err)
        {
            return next(err);
        }

        res.send(chatlog);
    });
}