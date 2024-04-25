const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    res.render("pages/home", {
      title: 'Strona główna',
      url: req.url
    })
  });
  
  router.get('/sets/:name', (req, res) => {
    const { name } = req.params;
  
    const giftSets = [
      { slug: 'small', name: 'mały zestaw', price: 50 },
      { slug: 'medium', name: 'średni zestaw', price: 80 },
      { slug: 'large', name: 'duży zestaw', price: 140 }
    ]
  
    const giftSet = giftSets.find(s => s.slug === name);
    if (giftSet) {
      res.render('pages/giftset', { 
        name: giftSet?.name,
        giftSets: giftSets,
        title: giftSet?.name ?? 'Brak wyników',
        url: req.url 
      })
  
    } else {
      res.send(`nie znaleziono zestawu`);
    }
  
  });
  
  router.get('*' , (req, res) => {
    res.render('errors/404', {
      title: 'Nie znaleziono',
      layout: 'layouts/minimalistic',
      url: req.url
    })});

module.exports = router;