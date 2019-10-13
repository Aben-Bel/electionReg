var registers = require('./curd');

exports.createregister = function (req, res, next) {
    console.log('GOT MESSAGE FROM CREATE');
    console.log(`MESSAGE: ${req.body}`);
    var register = {
        name: req.body.name,
        description: req.body.description
    };

    registers.create(register, function(err, register) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "register created successfully"
        })
    })
}

exports.getregisters = function(req, res, next) {
    registers.get({}, function(err, elector) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            elector: elector
        })
    })
}

exports.getregister = function(req, res, next) {
    registers.get({name: req.params.name}, function(err, elector) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            elector: elector
        })
    })
}

exports.updateregister = function(req, res, next) {
    var register = {
        name: req.body.name,
        description: req.body.description
    }
    registers.update({_id: req.params.id}, register, function(err, register) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "register updated successfully"
        })
    })
}

exports.removeregister = function(req, res, next) {
    registers.delete({_id: req.params.id}, function(err, register) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "register deleted successfully"
        })
    })
}
