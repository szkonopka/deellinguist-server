const User = require('../models/user.model');

exports.user_create = function(req, res) {
    let user = new User({
        name: req.body.name
    });

    user.save(function(err) {
        if(err) 
        {
            return next(err);
        }

        res.send('User created successfully!');
    })
}

exports.user_get_all = function(req, res) {
    
}

exports.user_get_by_id = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(err)
        {
            return next(err);
        }

        res.send(user);
    });
}