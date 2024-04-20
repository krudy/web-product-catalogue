const express = require('express');
const port = 9999;
const path = require('path');

const app = express();

//setting view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/views'));


app.get('/', (req, res) => {
  res.render("home")
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
    res.render('giftset', { name })

  } else {
    res.send(`nie znaleziono zestawu`);
  }

});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});