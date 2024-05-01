const { app } = require('./app')
const { port } = require('./config')

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});