const axios = require('axios');

const registrationData = {
  email: "balajishankarganesh@gmail.com",
  name: "Balaji",
  mobileNo: "8946040919",
  githubUsername: "Balajishankarganesh",
  rollNo: "714022104018",
  accessCode: "BUeZuD"
};

axios.post('http://20.244.56.144/evaluation-service/register', registrationData)
  .then(response => {
    console.log('Registration successful!');
    console.log('Client ID:', response.data.clientID);
    console.log('Client Secret:', response.data.clientSecret);
    // Remember to save these values!
  })
  .catch(error => {
    console.error('Registration failed:', error.response.data);
  });