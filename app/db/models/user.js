const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
        minLenght: [5, "Hasło powinno zawierać przynajmniej 4 znaki"]
    }
});

userSchema.post('save', function(error, doc, next) {
    if(error.code === 11000) {
        error.errors = {email: {message: 'ten email jest już zajęty'}}
    }
    next(error);
})

const User = mongoose.model('User' , userSchema);

module.exports = User;