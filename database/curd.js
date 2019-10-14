const mongoose = require('mongoose');
const registerSchema = require('../model/electionReg.js');

const cb = function(err, result) {
    console.log('in callback');
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('did something: ',result);
}
registerSchema.statics = {
    create : function(data, cb) {
        const register = new this(data);
        register.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        // this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
        this.findOneAndUpdate(query, updateData, {upsert:true}, function(err, doc){
            if (err) return console('500, { error: err }');
            return console.log("succesfully saved");
        });
    },

    delete: function(query, cb) {
        this.findByIdAndRemove(query,cb);
    }
}

const registersModel = mongoose.model('registers', registerSchema);
module.exports = registersModel;
