const express = require('express');
const app = express();
const cors = require('cors'); // import cors
const port = process.env.PORT || 4000;

app.use(cors());
// API endpoint for text
app.get('/api/text', (req, res) => {
  res.send('Hello, World! Welcome to Coole app.');
});

// Optionally, you can have a default route for the frontend
app.get('/', (req, res) => {
  res.send('This could be your frontend HTML or a landing page.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
