const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
// API endpoint for text
app.get('/api/text', (req, res) => {
  res.send('Hello, World! Welcome to my Node.js app.');
});

// Optionally, you can have a default route for the frontend
app.get('/', (req, res) => {
  res.send('This could be your frontend HTML or a landing page.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
