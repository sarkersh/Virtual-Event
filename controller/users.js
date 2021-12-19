const db = require('../db')
var express = require('express');

const getUsers = function(req, res, next) {
    res.send('respond with a resource');
}

const registerUsers = function(req, res, next) {
    const {fullname, email, phone} = req.body
    try {
        const query = "INSERT INTO users (fullname, email, phone) VALUES (?,?,?);";
        insertId = db.query(
            query,
            [fullname, email, phone] ,
            (err, result) => {
                if (err) throw err;
                res.redirect('/')

        })

    } catch (error) {
        console.log(error);
    }

}

const submitContactMessage = function(req, res, next) {
    const {fullname, email, phone, message} = req.body
    try {
        const query = "INSERT INTO contacts (fullname, email, phone, message) VALUES (?,?,?,?);";
        insertId = db.query(
            query,
            [fullname, email, phone, message] ,
            (err, result) => {
                if (err) throw err;

                res.redirect('/contact')

            })

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getUsers,
    registerUsers,
    submitContactMessage
}
