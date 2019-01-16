const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// app.get('/me', (req, res) => {
//   res.render('./../public/index.html');
// });

app.listen(port, () => {
  console.log(`started on port ${port}`);
});
