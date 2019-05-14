const express = require('express');
const hbs = require('hbs');
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Remember to paste your credentials here
var clientId = '94835056362e4220a653ca820644f94c',
    clientSecret = '3b3d28a485cf4082bd3af15a063b9a4e';

var spotifyApi = new SpotifyWebApi({
    clientId : clientId,
    clientSecret : clientSecret
  });

spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});


app.use("/", require("./routes/index"))
app.use("/", require("./routes/artist"))
app.use("/", require("./routes/albums"))
app.use("/", require("./routes/tracks"))




// Retrieve an access token.

app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));
