const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var Employee = mongoose.model('Employee');

exports.index = function (req, res, next) {
    return res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    })
}

exports.addEmp = function (req, res, next) {
    var emoobj = new Employee();
    emoobj.fullName = req.body.fullName
    emoobj.email = req.body.email
    emoobj.mobile = req.body.mobile
    emoobj.city = req.body.city
    emoobj.save((error, doc) => {

        console.log(doc);
        if (!error) res.redirect('/list');
        if (error) console.log(error);
    });
}

exports.list = function (req, res, next) {
    Employee.find((error, docs) => {
        if (!error) res.render("employee/list", {
            list: docs
        })
        if (error) console.log(error);
    })
}

exports.updateView = function (req, res, next) {

    Employee.findById(req.params.id, (error, docs) => {
        if (!error) return res.send(docs);
        if (error) console.log(error);
    })
}

exports.update = function (req, res, next) {

    const update = {
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city
    };

    Employee.findOneAndUpdate(req.body.id, update, function (err, doc) {
        if (!err) res.redirect('/list');
        if (err) console.log(err);
    });
}

exports.delete = function (req, res, next) {

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {

        if (!err) res.redirect('/list');

        if (err) console.log(error);

    });
}




