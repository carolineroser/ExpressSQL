let models = require('../models')
let validator = require('validator');

const validateCreateUserFields = function(errors, req) {
    if(!validator.isEmail(req.body.email)){
        errors["email"] = "Please use a valid email address";
    }
    if (!validator.isAscii(req.body.password)){
       errors["password"] = "Invalid character in password"; 
    }
    if (!validator.isLength(req.body.password, {min: 8, max: 26})){
        errors["password"] = "Your password must be between 8 and 26 characters"
    }
}

exports.validateUser = function(errors, req) {
    return new Promise(function(resolve, reject){
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(u => {
            if (u != null){
                errors["email"] = "Email is already used, please login or reset your password"
            }
            resolve(errors);
        })  
    })
}