console.log("The bot is starting");

var Twit = require('twit'); // import twit package

// Create new twit object, storing secret values associated with a twitter bot
// various things liek consumer key, secret key, are for handling users with 
// different account credentials

var T = new Twit({
  consumer_key:         'kmlD6fbbb3T2PLXi42ORVvPDM',
  consumer_secret:      'QpzTM7GrZPCzRGvUmdTAol05QxzCpZ3exYhPonob8D8cEOeYNe',
  access_token:         '1443067983904100354-JevpkyCrtrBPJvvWPBa8dWHljgygSz',
  access_token_secret:  'FYNm8JDHqn6B5vawyalCOualiIVUfrgCY0QzaW2EzxixT',
  // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  // strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

