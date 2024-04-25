const { app } = require('./app')
const port = 9999;

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});