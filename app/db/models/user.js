const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {validateEmail} = require('../validators');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: [validateEmail, "Nieprawidłowy format email"]
    },
    password: {
        type: String,
        required: true,
        minlength: [5, "Hasło powinno zawierać przynajmniej 4 znaki"]
    }
});


userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')){
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next();
})

userSchema.post('save', function(error, doc, next) {
    if(error.code === 11000) {
        error.errors = {email: {message: 'ten email jest już zajęty'}}
    }
    next(error);
})

const User = mongoose.model('User' , userSchema);

module.exports = User;