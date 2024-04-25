const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mammaterra-catalogue');

//model 

const GiftSet = mongoose.model('GiftSet', {
    slug: {
        type: String,
        required: [true, 'Slug jest wymagany'],
        minLength: [3, 'minimalna liczba znaków to 3']
    },
    name: {
        type: String,
        required: [true, 'Nazwa jest wymagana']
    },
    price: {
        type: Number,
        required: [true, 'Cena jest wymagana'],
        min: [1, 'Cena musi być większa niż 0']
    }});

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