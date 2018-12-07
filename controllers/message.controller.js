const Message = require('../models/message.model');

exports.message_create = function(req, res) {
    let message = new Message({
        name: req.body.name,
        content: req.body.content,
        date: req.body.date,
        type: req.body.type,
        userId: req.body.userId
    });

    message.save(function(err) {
        if(err) 
        {
            return next(err);
        }

        res.send('Message created successfully!');
    })
}

exports.message_get_all = function(req, res) {
    
}

exports.message_get_by_id = function(req, res) {
    Message.findById(req.params.id, function(err, message) {
        if(err)
        {
            return next(err);
        }

        res.send(message);
    });
}

exports.message_get_all_from_user = function(req, res) {

}