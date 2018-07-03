var request = require("request");

var options = { 
  method: 'GET',
  url: 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/dc31cca75d81e3a0259a06348add5ee188b7c5fe0b311ba77947cae5f33bb4b7/api/hello',
  headers: { accept: 'application/json', miapikey: '348e7576-f35b-458e-b6a1-d80e0942cf5c' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});