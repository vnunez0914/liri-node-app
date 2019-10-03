# LIRI Bot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# How to use LIRI

1. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

2. To retrieve the data that will power this app, you'll need to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   
 3. Type node liri.js and one of the following commands:

   * `concert-this`<band/artist name here>, this will display the following information by searching the bands in town api
     * Name of the venue

     * Venue location

     * Date of the Event

   * `spotify-this-song`<song name here>, this will search Spotify and display the following information
      * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
   * `movie-this`<name of movie here>, will search omdb for the title and display the following information:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' 
    
   * `do-what-it-says`
   LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It will run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`. 
 
 # Technology Used
 
* Javascript
* node.js
* Node Package Manager
* API

# Issues

* bands in town API is giving me some trouble so that is still a work in progress and will update ASAP
* Spotify command and do-what-it-says is still in development. Will update and remove from README when fixed


# Future Developements:
* Addng a prompt package from npm to make it more user friendly


# Developer:
* Victor Nunez vnunez0914@gmail.com
