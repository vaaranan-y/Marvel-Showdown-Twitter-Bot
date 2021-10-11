console.log("The bot is starting");

var Twit = require('twit'); // import twit package

// Create new twit object, storing secret values associated with a twitter bot
// various things liek consumer key, secret key, are for handling users with 
// different account credentials

// use ./... to specify file as package, not a directory
var config = require('./config') // returns "{key1: ..., key2: ..., etc.}"
var T = new Twit(config)

