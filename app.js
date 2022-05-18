const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('Check post request!');
});

///// SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//
