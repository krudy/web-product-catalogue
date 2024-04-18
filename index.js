const express = require('express');
const port = 9999;

const app = express();

app.get('/', (req, res) => {
  res.send('homepage');
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
    res.send(`wybrałeś ${giftSet?.name}`);
  } else {
    res.send(`nie znaleziono zestawu`);
  }
  
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});