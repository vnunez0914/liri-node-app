require("dotenv").config();
// variables to require keys and files
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);

// variables for user input 
var liriCommand = process.argv[2];
var userInput = process.argv[3]; //splice and joint?

// will need Switch with four cases: concert-this, spotify-this-song, movie-this, do-what-it-says

switch(liriCommand) {
    case "spotify-this-song":
        spotifySong();
        break;

    case "movie-this":
        movieThis();
        break;
    
    case "concert-this":
        concertThis();
        break;

    case "do-what-it-says":
        doWhatItSays()
        break;
}

// function for spotify-this-song
function spotifySong(){
  
}