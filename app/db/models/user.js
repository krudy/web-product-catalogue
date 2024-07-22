const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {validateEmail} = require('../validators');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: [true, "Ten adres email jest już zajęty"],
        validate: [validateEmail, "Nieprawidłowy format email"]
    },
    password: {
        type: String,
        required: true,
        minLenght: [5, "Hasło powinno zawierać przynajmniej 4 znaki"]
    }
})

const User = mongoose.model('User' , userSchema);

module.exports = User;