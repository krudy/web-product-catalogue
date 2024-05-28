const GiftSet = require('../db/models/GiftSet')

class GiftSetController {


async showGiftSets(req, res) {

  const { q } = req.query;

  let giftSets;

  if( q ) {
    giftSets = await GiftSet.find({ name: { $regex: q, $options: 'i'}});
  }else{
    giftSets = await GiftSet.find({});
  }

  res.render('pages/giftsets/giftSets', {
    giftSets: giftSets,
    title: 'Zestawy'
  });

}

//Adding Set

async createGiftSet(req, res) {

  const giftSet = new GiftSet({
    name: req.body.name,
    price: req.body.price,
    slug: req.body.slug.toLowerCase().split(' ').join('-')
  });

  
  try{
    await giftSet.save();
    res.redirect('/sets');
  }catch (err) {
    res.render('pages/giftsets/add', {
      errors: err.errors,
      form: req.body
    });
  }
}

showAddGiftSetForm(req, res) {
  res.render('pages/giftsets/add');
}

//Editing Set

async showEditGiftSetForm(req, res) {

  const { name } = req.params
  const giftSet = await GiftSet.findOne({ slug: name})

  res.render('pages/giftsets/edit', {
    form: giftSet
  });
}

async editGiftSet(req, res) {

  const { name } = req.params
  const giftSet = await GiftSet.findOne({ slug: name });
  giftSet.name = req.body.name;
  giftSet.slug = req.body.slug.toLowerCase().split(' ').join('-');
  giftSet.price = req.body.price;

  
  try{
    await giftSet.save();
    res.redirect('/sets');
  }catch (err) {
    res.render('pages/giftsets/edit', {
      errors: err.errors,
      form: req.body
    });
  }
}

//Deleting Set

async deleteGiftSet(req, res) {

  const { name } = req.params
  try {
    await GiftSet.deleteOne({ slug: name }); 
    res.redirect('/sets');
  } catch (err) {
    res.send(`Nie udało się usunąć zestawu`);
  }
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