const registers = require('./curd');
const shortid = require('shortid');
const path = require('path');
const express = require('express');
const router = express.Router();

exports.createregister = function (req, res, next) {
    console.log('GOT MESSAGE FROM CREATE');
    const data = req.body;
    console.log('Message: ', data);
    const id = shortid.generate();
    const register = {
        firstName:data.firstName,
        fatherName:data.fatherName,
        grandFatherName:data.grandFatherName,
        gender:data.gender,
        dateOfBirth: data.dateOfBirth,
        maritalStatus: data.martialStatus,
        mobileNumber:data.mobileNumber,
        emailAddress:data.emailAddress,
        regionCity: data.regionCity,
        subcity:data.subCity,
        wereda:data.wereda,
        idNumber:data.idNumber,
        verifyNumber:id,
        status:'awaiting'
    };

    registers.create(register)
    res.send(id);
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
    console.log('querying for: ', req.params.name);
    if (req.params.name === 'awaiting'){
        registers.get({status: req.params.name}, function(err, elector) {
            if(err) {
                res.json({
                    error: err
                })
            }
            res.json({
                elector: elector
            })
        })
    } else {
        registers.get({verifyNumber: req.params.name}, function(err, elector) {
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
    
}

exports.updateregister = function(req, res, next) {
    let register = req.body;
    console.log('updated ');
    registers.update({_id: req.params.id}, register)
}

exports.removeregister = function(req, res, next) {
    console.log('about to delete')
    registers.delete({_id: req.params.id});
    res.send('deleted');
}
