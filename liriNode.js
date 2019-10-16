// require .env //
require("dotenv").config();

// require moment //
var moment = require("moment");

// require fs //
var fs = require("fs");

// link key.js //
var keys = require("./keys.js");

// spotify //
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// axios access to omdb && bands in town //
var axios = require("axios");

// arguments //
var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

// functions //

function userCommand(userInput, userQuery) {

    switch (userInput) {
        case "concert-this":
            concertThis(userQuery);
            break;
        case "spotify-this":
            spotifyThisSong(userQuery);
            break;
        case "movie-this":
            movieThis(userQuery);
            break;
        case "do-what-it-says":
            doThis();
            break;
        default:
            console.log("Please enter a command, I'm not a mind reader.")
            break;
    };

};

function concertThis(artist) {
    var artist = userQuery;
    var bandQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(bandQueryURL).then(
        function (response) {

            console.log("------------------------------------");
            console.log("Venue: " + response.data[0].venue.name + "\r\n");
            console.log("Location: " + response.data[0].venue.city + "\r\n");
            console.log("Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\r\n");

            var concertLog = "\nArtist: " + artist + "\nVenue: " + response.data[0].venue.name + "\r\n";
            fs.appendFile("log.txt", concertLog, function (err) {

                if (err) {

                    return fs.appendFile("log.txt", "ERROR" + err);
                }

            });

        });

};

function spotifyThisSong(songName) {
    if (!songName) {
        songName = "Ace of Base The Sign";
    };


 
  
    

    spotify.search({ type: "track", query: songName }, function (err, data) {

        if (err) {

            return console.log("ERROR" + err);
        };

        console.log("------------------------------------");
        console.log("Artist(s) Name: " + data.tracks.items[0].album.artists[0].name + "\r\n");
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Song Preview: " + data.tracks.items[0].href + "\r\n");

        var spotifyLog = "\nArtist: " + data.tracks.items[0].album.artists[0].name + "\nSong: " + data.tracks.items[0].name + "\r\n";
        fs.appendFile("log.txt", spotifyLog, function (err) {

            if (err) {

                return fs.appendFile("log.txt", "ERROR" + err);
            }

        });

    });
};

function movieThis(movie) {

    if (!movie) {
        movie = "Mr.Nobody";
    };
    var movie = userQuery;
    var movieQueryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    //console.log(movieQueryURL);

    axios.request(movieQueryURL).then(
        function (response) {

            console.log("------------------------------------");
            console.log("* Title: " + response.data.Title + "\r\n");
            console.log("* Year Released: " + response.data.Year + "\r\n");
            console.log("* IMDB Rating: " + response.data.imdbRating + "\r\n");
            console.log("* Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\r\n");
            console.log("* Country Produced: " + response.data.Country + "\r\n");
            console.log("* Language(s): " + response.data.Language + "\r\n");
            console.log("* Plot: " + response.data.Plot + "\r\n");
            console.log("* Actors/Actresses: " + response.data.Actors + "\r\n");

            var movieLog = "\nMovie: " + response.data.Title + "\nActors/Actresses: " + response.data.Actors + "\r\n"
            fs.appendFile("log.txt", movieLog, function (err) {

                if (err) {

                    return fs.appendFile("log.txt", "ERROR" + err);
                }

            });

        });
};

function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {

            return console.log(error)
        } else {

           

            var doThisData = data.split(",");

     
        

          
            userCommand(doThisData[0], doThisData[1]);

        }

    });

};

userCommand(userInput, userQuery);