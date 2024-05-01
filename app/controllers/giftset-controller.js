const GiftSet = require('../db/models/GiftSet')

class GiftSetController {


async showGiftSets(req, res) {

  const giftSets = await GiftSet.find({});

  res.render('pages/giftsets/giftSets', {
    giftSets: giftSets,
    title: 'Zestawy'
  });

}

async createGiftSet(req, res) {

  const giftSet = new GiftSet({
    name: req.body.name,
    price: req.body.price,
    slug: req.body.slug.toLowerCase().split(' ').join('-')
  });

  await giftSet.save();

  res.redirect('/sets');
}

showAddGiftSetForm(req, res) {
  res.render('pages/giftsets/add');
}

async showGiftSet(req, res) {
    const { name } = req.params;
  
    const giftSet = await GiftSet.findOne({ slug: name });
    if (giftSet) {
      res.render('pages/giftsets/giftset', { 
        name: giftSet?.name,
        title: giftSet?.name ?? 'Brak wyników'     
      })
  
    } else {
      res.send(`nie znaleziono zestawu`);
    }
  
  }}

  module.exports = new GiftSetController();