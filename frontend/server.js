const express = require('express');
const path = require('path');

const app = express();
const port = 5500; // You can change this if needed

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Frontend server is running at http://localhost:${port}`);
});