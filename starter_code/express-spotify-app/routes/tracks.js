const express = require('express');
const app = express.Router();
const spotifyApi = require('./spotifyWebApi')

app.get('/tracks/:albumId', (req, res) => {
    spotifyApi.getAlbumTracks(req.params.albumId, { limit : 5, offset : 1 })
    .then(function(data) {
      console.log(data.body.items[0]);
      res.render('tracks', {track: data.body.items})
    }, function(err) {
      console.log('Something went wrong!', err);
    });
});

module.exports = app;