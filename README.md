# lirinodeapp

# ABOUT
Liri is a command line Node Application that takes in parameters for songs, bands, and movies and returns the data.

Liri makes calls to the Spotify API, and uses Axios to access the BandsInTown and OMDB APIs to obtain the correct search results.

# APPLICATION
To run the App in your command line, use the following to obtain your desired results:

To search CONCERTS
node liri.js concert-this + (artist)

To search MUSIC
node lirinode.js spotify-this + (song)

To search MOVIES
node liri.js movie-this + (movie title)

To run the RANDOM.TXT file
node liri.js do-what-it-says

# WORKING EXAMPLES

CONCERT-THIS
![concert-this](/Images/concertThis.jpeg)

SPOTIFY-THIS (NO USER QUERY, DEFAULTS TO ACE OF BASE "THE SIGN")
![spotify-this](/Images/spotifyThisBlank.jpeg)

SPOTIFY-THIS
![spotify-this + song](/Images/spotify-this.jpeg)

MOVIE-THIS (NO USER QUERY, DEFAULTS TO "MR. NOBODY")
![movie-this](/Images/movieThisBlank.jpeg)

MOVIE-THIS
![movie-this + movie](/Images/movieThis.jpeg)

LOG.TXT (APPENDED USER QUERIES)
![log.txt](/Images/logTXT.jpeg)

# ERRORS

RANDOM.TXT (READ FILE AND RUN COMMAND)
![doThisError](/Images/doThisError.jpeg)
I kept getting back a "Search and Query are not defined" error and was at a loss for how to fix it. 
As the working examples show, each search and query on their own run, but when running "do-what-it-says", the command would not bring back the data read from the random.txt file.

# UPDATE

RANDOM.TXT (READ FILE AND RUN COMMAND)
![doThis](/Images/doThis.jpeg)
Global Variables will find you, and they will come for you...