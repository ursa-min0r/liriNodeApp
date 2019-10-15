// require .env //
require("dotenv").config();

// require request //
let request = require("request");

// require moment //
var moment = require("moment");

// require fs //
var fs = require("fs");

// link key.js //
var keys = require("./keys.js");

// spotify //
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// omdb && bands in town //
var axios = require("axios")

// arguments //
var userInput = process.argv[2];
var userQuery = process.argv.slice(3).joint(" ");

// functions //

function userCommand(userInput, userQuery) {

    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThis(userQuery);
            break;
        default:
            console.log("Please enter a command, I'm not a mind reader.")
            break;
    }

}

userCommand(userInput, userQuery);

function concertThis(artist) {
    var artist = userQuery;
    var bandQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(bandQueryURL).then(
        function (response) {

            console.log("------------------------------------");
            console.log("Venue: " + response.data[0].venue.name + "\r\n");
            console.log("Location: " + response.data[0].venue.city + "\r\n");
            console.log("Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\r\n");

            var concertLog = "------Log History------" + "\nArtist: " + artist + "\nVenue: " + response.data[0].venue.name;
            fs.appendFile("log.txt", concertLog, function (err) {
    
            });

        });

   }; 



function spotifyThisSong(songName) {
    //var spotify = new Spotify(keys.spotify);

    if (songName) {
        songName = "The Sign";
    };

    spotify.search({ type: "track", query: songName }, function (err, data) {

        if (err) {

            return console.log("ERROR" + err);
        }

        console.log("------------------------------------");
        console.log("Artist(s) Name: " + data.tracks.items[0].album.artists[0].name + "\r\n");
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Song Preview: " + data.tracks.items[0].href + "\r\n");

        var spotifyLog = "------Log History------" + "\nArtist: " + data.tracks.items[0].album.artists[0].name
        fs.appendFile("log.txt", spotifyLog, function (err) {

        });

    });
};


function movieThis() {



};

function doThis() {

};