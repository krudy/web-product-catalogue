const express = require('express');
const port = 9999;

const app = express();

app.get('/', (req, res) => {
  res.send('homepage');
});

app.get('/zestawy/maly', (req, res) => {
    res.send('maly zestawy!');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});