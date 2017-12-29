var playlist = { Tswizzle: "Blank Space", Pentatonix: 'Say Something'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}