const express = require('express');
const helmet = require('helmet');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.use(helmet.frameguard());

app.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur le port 3000');
});