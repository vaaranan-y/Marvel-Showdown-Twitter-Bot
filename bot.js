console.log("The bot is starting");

var Twit = require('twit'); // import twit package

// Create new twit object, storing secret values associated with a twitter bot
// various things liek consumer key, secret key, are for handling users with 
// different account credentials

// use ./... to specify file as package, not a directory
var config = require('./config') // returns "{key1: ..., key2: ..., etc.}"
var T = new Twit(config)


// get, post, stream, last one is constantly connected, and can respond to 
// stuff like mentions

// var params = { q: 'trump since:2011-07-11', count: 2 }

// T.get('search/tweets', params, (err, data, response) => {
// 	var tweets = data.statuses;
// 	for (var i = 0; i < tweets.length; i++) {
// 		console.log(tweets[i].text);
// 	}
// })

// Relevant test post
// var tweet = {
// 	status: 'Marvel Shwodown Test Tweet 1'
// }

var names = require('marvel-comics-characters');
var allNames = names.all;
var randomName1 = names.random();
var randomName2 = names.random();
console.log("Today's Showdown: " + randomName1 + " vs. " + randomName2);

var tweet = {
	status: "Today's Showdown: " + randomName1 + " vs. " + randomName2
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if(err){
		console.log(err);
	} else{
		console.log("SUCCESS");
	}
}

// Test post
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
// })