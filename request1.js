const axios = require('axios');

// This is the data you need to send for authentication.
// It must include your clientID and clientSecret from the previous step.
const authData = {
  email: "balajishankarganesh@gmail.com",
  name: "Balaji",
  rollNo: "714022104018",
  accessCode: "BUeZuD",
  // You MUST replace these with the exact values you received from registration
  clientID: "17cd6a18-2230-411c-846c-846314c165da",
  clientSecret: "RKRuUhKTDaWsbrMS"
};

// The endpoint for authentication is '/auth'
axios.post('http://20.244.56.144/evaluation-service/auth', authData)
  .then(response => {
    console.log('Authentication successful!');
    console.log('Access Token:', response.data.access_token);
    console.log('Token Type:', response.data.token_type);
    // Remember to save your access_token!
  })
  .catch(error => {
    console.error('Authentication failed:', error.response.data);
  });