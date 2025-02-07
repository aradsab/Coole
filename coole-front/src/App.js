import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function App() {
  const [serverText, setServerText] = useState('Loading text from server...');

  useEffect(() => {
    // Directly target the server running on port 8000.
    fetch('http://localhost:8000/api/text')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => setServerText(data))
      .catch(error => {
        console.error('Error fetching text:', error);
        setServerText('Error loading text from server.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{serverText}</p>
      </header>
    </div>
  );
}

export default App;
