const express = require('express');
const app = express();

// API endpoint for text
app.get('/api/text', (req, res) => {
  res.send('Hello, World! Welcome to my Node.js app.');
});

// Optionally, you can have a default route for the frontend
app.get('/', (req, res) => {
  res.send('This could be your frontend HTML or a landing page.');
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
