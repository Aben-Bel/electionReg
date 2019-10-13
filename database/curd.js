const mongoose = require('mongoose');
const registerSchema = require('../model/electionReg.js');

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
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

const registersModel = mongoose.model('registers', registerSchema);
module.exports = registersModel;
