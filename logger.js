const axios = require('axios');

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiYWxhamlzaGFua2FyZ2FuZXNoQGdtYWlsLmNvbSIsImV4cCI6MTc1Njk4MDA0NiwiaWF0IjoxNzU2OTc5MTQ2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNGQ1YWY4NGEtOGI3OC00MjY0LWJmNDQtNzNlNmQwOWIwMTQ1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYmFsYWppIiwic3ViIjoiMTdjZDZhMTgtMjIzMC00MTFjLTg0NmMtODQ2MzE0YzE2NWRhIn0sImVtYWlsIjoiYmFsYWppc2hhbmthcmdhbmVzaEBnbWFpbC5jb20iLCJuYW1lIjoiYmFsYWppIiwicm9sbE5vIjoiNzE0MDIyMTA0MDE4IiwiYWNjZXNzQ29kZSI6IkJVZVp1RCIsImNsaWVudElEIjoiMTdjZDZhMTgtMjIzMC00MTFjLTg0NmMtODQ2MzE0YzE2NWRhIiwiY2xpZW50U2VjcmV0IjoiUktSdVVoS1REYVdzYnJNUyJ9.RJccCS5FUTKqoYwyDiOzGNtEHOY6BuIHJEYwuP3mhMk';

async function log(stack, level, packageName, message) {
  const url = 'http://20.244.56.144/evaluation-service/logs';

  const logData = {
    stack: stack,
    level: level,
    package: packageName,
    message: message
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}` // Fix is here
  };

  try {
    const response = await axios.post(url, logData, { headers: headers });
    console.log('Log sent successfully:', response.data);
  } catch (error) {
    console.error('Failed to send log:', error.response.data);
  }
}

module.exports = { log };