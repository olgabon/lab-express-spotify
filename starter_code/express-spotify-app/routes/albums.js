const express = require("express")
const app = express()
const spotifyApi = require('./spotifyWebApi')

app.get('/albums/:artistId', (req, res) => {
    spotifyApi.getArtistAlbums(req.params.artistId).then(
        function(data) {
          res.render('albums', {album: data.body.items})
        },
        function(err) {
          console.error(err);
        }
    );
});

module.exports = app;