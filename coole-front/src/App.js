import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function App() {
  const [serverText, setServerText] = useState('Loading text from server...');

  // Use the environment variable, or fall back to a default value if it's not set.
  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS || 'http://localhost:4000';

  useEffect(() => {
    // Construct the URL using the server address from the environment variable.
    fetch(`${serverAddress}/api/text`)
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
  }, [serverAddress]); // Dependency ensures the effect re-runs if serverAddress changes.

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{serverText}</p>
      </header>
    </div>
  );
}

export default App;
