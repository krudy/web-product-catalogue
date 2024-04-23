const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mammaterra-catalogue');

//model 

const GiftSet = mongoose.model('GiftSet', {
    slug: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    }});

async function main() {

    const giftSet = new GiftSet({
        slug:'small',
        name:'mały zestaw',
        price: 50
    })

   await giftSet.save();
}

main();