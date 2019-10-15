# lirinodeapp

# ABOUT
Liri is a command line Node Application that takes in parameters for songs, bands, and movies and returns the data.

Liri makes calls to the Spotify API, and uses Axios to access the BandsInTown and OMDB APIs to obtain the correct search results.

# APPLICATION
To run the App in your command line, use the following to obtain your desired results:

To search MUSIC
node lirinode.js spotify-this + (song)

To search CONCERTS
node liri.js concert-this + (artist)

To search MOVIES
node liri.js movie-this + (movie title)

To run the RANDOM.TXT file
node liri.js do-what-it-says