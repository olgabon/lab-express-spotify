const SpotifyWebApi = require('spotify-web-api-node');

var clientId = '94835056362e4220a653ca820644f94c',
    clientSecret = '3b3d28a485cf4082bd3af15a063b9a4e';;

    

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

module.exports = spotifyApi