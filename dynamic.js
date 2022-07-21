const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3010, () => {
  console.log('Server is running on port 3010');
});

