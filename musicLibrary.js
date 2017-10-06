function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(name, rating, length) {
  this.name = name;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.overallRating = function() {
  let sum = 0;
  this.tracks.forEach(function(track) {
    sum += track.rating;
  })
  let average = sum / this.tracks.length;
  return average;
}

Playlist.prototype.totalDuration = function() {
  let sum = 0;
  this.tracks.forEach(function(track) {
    sum += track.length;
  })
  return sum;
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

const track1 = new Track('In Too Deep', 5, 160);
const track2 = new Track('Despacito', 1, 120);

const playlist1 = new Playlist("Sick songs");

const library1 = new Library("Cool Library", "Parm");

playlist1.addTrack(track1);
playlist1.addTrack(track2);

library1.addPlaylist(playlist1);

console.log(library1);