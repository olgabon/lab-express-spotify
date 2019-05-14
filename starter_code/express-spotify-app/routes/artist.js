const express = require("express")
const app = express()
const spotifyApi = require('./spotifyWebApi')

app.get("/artist", (req, res)=> {
    res.render("artist")
})

app.get("/search", (req, res)=> {
    let artist = req.query.artist
    spotifyApi.searchArtists(artist)
    .then(data => {
      res.render("artist", {artists: data.body.artists.items})
    })
    .catch(err => {
      res.send("Error")
    })
})

module.exports = app;