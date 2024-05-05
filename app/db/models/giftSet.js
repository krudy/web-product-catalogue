const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const giftSetSchema = new Schema({
    slug: {
        type: String,
        required: [true, 'Slug jest wymagany'],
        minLength: [3, 'minimalna liczba znaków dla pola slug to 3'],
        trim: true,
        lowercase: true
    },
    name: { 
        type: String,
        required: [true, 'Nazwa jest wymagana']
    },
    price: {
        type: Number,
        required: [true, 'Cena jest wymagana'],
        min: [1, 'Cena musi być większa niż 0']
    }})

const GiftSet = mongoose.model('GiftSet', giftSetSchema);

module.exports = GiftSet;