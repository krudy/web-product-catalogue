const GiftSet = require('../db/models/GiftSet');
const fs = require('fs');

class GiftSetController {


  async showGiftSets(req, res) {

    const { q, sort, pricemin, pricemax } = req.query;
    const page = req.query.page || 1;
    const perPage = 4;

    const where = {};

    // search
    if(q) {
      where.name = { $regex: q || '', $options: 'i' };
    }

    //filters
    if(pricemin || pricemax) {
      where.price = {};
    if(pricemin) {where.price.$gte = pricemin };
    if(pricemax) {where.price.$lte = pricemax };
    }

    let query = GiftSet.find(where);
    

    //pagination 
    query = query.skip((page - 1) * perPage);
    query = query.limit(perPage);

    //sorting
    if (sort) {
      const s = sort.split('|');
      query = query.sort({[s[0]]: s[1]});
    }
   
    //exec
    const giftSets = await query.exec();
    const resultsCount = await GiftSet.find(where).count();
    const pagesCount = Math.ceil(resultsCount / perPage);

    res.render('pages/giftsets/giftSets', {
      giftSets: giftSets,
      title: 'Zestawy',
      page: page,
      pagesCount: pagesCount,
      resultsCount: resultsCount
    });

  }

  //Adding Set

  async createGiftSet(req, res) {

    const giftSet = new GiftSet({
      name: req.body.name,
      price: req.body.price,
      slug: req.body.slug.toLowerCase().split(' ').join('-'),
      image: req.file ? req.file.filename : null
    });


    try {
      await giftSet.save();
      res.redirect('/sets');
    } catch (err) {
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
    const giftSet = await GiftSet.findOne({ slug: name })

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

    if (req.file.filename && giftSet.image){
      fs.unlinkSync(`public/uploads/${giftSet.image}`);
    }

    if (req.file) {
      giftSet.image = req.file.filename;
    }


    try {
      await giftSet.save();
      res.redirect('/sets');
    } catch (err) {
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
      if (giftSet.image){
        fs.unlinkSync(`public/uploads/${giftSet.image}`);
      }
      await GiftSet.deleteOne({ slug: name });
      res.redirect('/sets');
    } catch (err) {
      res.send(`Nie udało się usunąć zestawu`);
    }
  }

  // Deleting image

  async deleteImage(req, res) {

    const { name } = req.params
    const giftSet = await GiftSet.findOne({ slug: name });
    try {
      fs.unlinkSync(`public/uploads/${giftSet.image}`);
      giftSet.image = '';
      await giftSet.save();
      res.redirect('/sets');
    } catch (err) {
      res.send(`Nie udało się usunąć zdjęcia`);
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

  }
}

module.exports = new GiftSetController();