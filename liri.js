require("dotenv").config();
// variables to require keys and files
var axios = require("axios");
var keys = require("./keys.js");
// console.log(keys);
var fs = require("fs");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
// console.log(spotify);
// console.log(spotify);
// variable to store key for omdb
var movieKey = keys.movieKey.key;
// console.log(movieKey);
// variable t0 store key for Bands in Town
var bandKey = keys.bandKey.key;
//  console.log(bandKey);
// variables for user input
var liriCommand = process.argv[2];
// variable for capturing user input
var userInput = process.argv.slice(3).join(" ");

// will need Switch with four cases: concert-this, spotify-this-song, movie-this, do-what-it-says

switch (liriCommand) {
  case "movie-this":
    movieThis();
    break;

  case "spotify-this-song":
    spotifySong();
    break;

  case "concert-this":
    concertThis();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}

// function for OMDB, movie-this case
function movieThis() {
  if (userInput === "") {
    userInput = "Mr.Nobody";
  }
  // variable for user to select movie name and concatinate to url
  var queryUrl =
    "http://www.omdbapi.com/?t=" +
    userInput +
    "&y=&plot=short&apikey=" +
    movieKey;
  // console.log(queryUrl)
  axios.get(queryUrl).then(function (response) {
    // console.log(response);
    console.log("\n" + "Title:" + response.data.Title + "\n"); // Title of the movie.
    console.log("Release Year: " + response.data.Year + "\n"); //   Year the movie came out.
    console.log("The IMDB rating is: " + response.data.imdbRating + "\n"); //  IMDB Rating of the movie.
    console.log("Ratings: " + response.data.Ratings[0].Value + "\n"); //  Rotten Tomatoes Rating of the movie.
    console.log("This movie was produced in: " + response.data.Country + "\n"); //  Country where the movie was produced.
    console.log("Language: " + response.data.Language + "\n"); //  Language of the movie.
    console.log("Plot: " + response.data.Plot + "\n"); //  Plot of the movie.
    console.log("Actors: " + response.data.Actors + "\n"); // Actors in the movie.
  });
}

// function for Spotify, spotify-this-song case
function spotifySong() {
  //If user has not specified a song , default to "Bye Bye Bye" by NSYNC
  if (userInput === "") {
    userInput = "Bye Bye Bye";
  }

  spotify.search({ type: "track", query: userInput }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    } else {
      console.log(
        "\n" + "Artist: " + data.tracks.items[0].artists[0].name + "\n"
      ); //Artist(s)
      console.log("Song name: " + data.tracks.items[0].name + "\n"); // The song's name
      console.log(
        "Preview link: " + data.tracks.items[0].external_urls.spotify + "\n"
      ); // A preview link of the song from Spotify
      console.log("Album: " + data.tracks.items[0].album.name + "\n"); // The album that the song is from
    }

    // console.log(data.tracks.items[0]);
  });
}

// // function for Band in Town, concert-this case
function concertThis() {
  if (userInput === "") {
    console.log("\n Type Artist/Band name to display Concert Information.\n");
  } else {
    var queryUrl =
      "https://rest.bandsintown.com/artists/" +
      userInput +
      "/events?app_id=" +
      bandKey;
    // console.log(queryUrl)
    axios.get(queryUrl).then(function (data) {
      // console.log(data.data[0]);

      console.log("\n" + "Venue: " + data.data[0].venue.name + "\n"); //Name of the venue
      console.log("Venue location: " + data.data[0].venue.city + "\n"); //Venue location

      var date = data.data[0].datetime;
      nod;
      date = moment(date).format("MMMM Do YYYY, h:mm:ss a");
      console.log("Event Date: " + date + "\n"); //Date of the Event (use moment to format this as "MM/DD/YYYY")
    });
  }
}

// function for do-what-it-says case
function doWhatItSays() {
  // The code will store the contents of the reading inside the variable "data"
  fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    //print the contents of data
    // console.log(data);

    // splits data from random.txt at comma
    var dataArr = data.split(",");

    // console.log(dataArr[1]);

    spotify.search({ type: "track", query: dataArr[1] }, function (err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      } else {
        console.log("\n" + "Artist: " + data.tracks.items[0].artists[0].name + "\n"); //Artist(s)
        console.log("Song name: " + data.tracks.items[0].name + "\n"); // The song's name
        console.log("Preview link: " + data.tracks.items[0].external_urls.spotify + "\n"); // A preview link of the song from Spotify
        console.log("Album: " + data.tracks.items[0].album.name + "\n"); // The album that the song is from
      }

      // console.log(data.tracks.items[0]);
    });
  });
}
