const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mammaterra-catalogue';

mongoose.connect(url);



// async function main() {

//     const giftSet = new GiftSet({
//         slug:'medium',
//         name:'średni zestaw',
//         price: 150
//     })

//     try {
//         await giftSet.save();

//     }catch (err) {
//         console.log('coś poszło nie tak...');
//         for (const key in err.errors) {
//                 console.log(err.errors[key].message);
            
//         }
//     }
// }

// main();