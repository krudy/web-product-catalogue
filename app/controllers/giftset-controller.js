const GiftSet = require('../db/models/GiftSet')

class GiftSetController {


async showGiftSets(req, res) {

  const giftSets = await GiftSet.find({});

  console.log(giftSets);

  res.render('pages/giftSets', {
    giftSets: giftSets,
    title: 'Zestawy'
  });

}

async showGiftSet(req, res) {
    const { name } = req.params;
  
    const giftSet = await GiftSet.findOne({ slug: name });
    if (giftSet) {
      res.render('pages/giftset', { 
        name: giftSet?.name,
        title: giftSet?.name ?? 'Brak wyników'     
      })
  
    } else {
      res.send(`nie znaleziono zestawu`);
    }
  
  }}

  module.exports = new GiftSetController();