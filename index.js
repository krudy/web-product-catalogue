const express = require('express');
const port = 9999;
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();

//setting view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/views'));

//setting layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');

app.get('/', (req, res) => {
  res.render("pages/home", {
    title: 'Strona główna'
  })
});

app.get('/sets/:name', (req, res) => {
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
      title: giftSet?.name ?? 'Brak wyników'  
    })

  } else {
    res.send(`nie znaleziono zestawu`);
  }

});

app.get('*' , (req, res) => {
  res.render('errors/404', {
    title: 'Nie znaleziono',
    layout: 'layouts/minimalistic'
  })});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});