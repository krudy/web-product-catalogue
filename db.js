const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mammaterra-catalogue');

//model 
const giftSetSchema = new Schema({
    slug: {
        type: String,
        required: [true, 'Slug jest wymagany'],
        minLength: [3, 'minimalna liczba znaków to 3'],
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

async function main() {

    const giftSet = new GiftSet({
        slug:'medium',
        name:'średni zestaw',
        price: 150
    })

    try {
        await giftSet.save();

    }catch (err) {
        console.log('coś poszło nie tak...');
        for (const key in err.errors) {
                console.log(err.errors[key].message);
            
        }
    }
}

main();