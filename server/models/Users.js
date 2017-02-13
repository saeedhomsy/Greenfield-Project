var Sequelize = require('sequelize');
var sequelize = require('../db/dbconnection.js');

exports.getAll = function (callback) {
    sequelize.query("select * from Users", { type: Sequelize.QueryTypes.SELECT })
        .then(callback)
}


exports.getUserByID = function (ID, callback) {
    sequelize.query("select * from Users where ID = :ID", { replacements: { ID: ID }, type: Sequelize.QueryTypes.SELECT })
        .then(callback)
}


exports.getUserByEmail = function (email, callback) {
    sequelize.query("select * from Users where Email = :Email", { replacements: { Email: email }, type: Sequelize.QueryTypes.SELECT })
        .then(callback)
}


exports.getUserByPhone = function (phone, callback) {
    sequelize.query("select * from Users where PhoneNumber = :PhoneNumber", { replacements: { PhoneNumber: phone }, type: Sequelize.QueryTypes.SELECT })
        .then(callback)
}




exports.addUser = function (userObj, callback) {
    var Query = 'insert into Users (FullName,UserName,Email,PhoneNumber,UserTypeName,Password,ImgUrl) \
                 values (:FullName,:UserName,:Email,:PhoneNumber,:UserTypeName,:Password,:ImgUrl)';
    sequelize.query(Query, { replacements: { FullName: userObj.FullName, UserName: userObj.UserName, Email: userObj.Email, PhoneNumber: userObj.PhoneNumber, UserTypeName: userObj.UserTypeName, Password: userObj.Password, ImgUrl: userObj.ImgUrl }, type: Sequelize.QueryTypes.INSERT })
        .then(callback)
}




