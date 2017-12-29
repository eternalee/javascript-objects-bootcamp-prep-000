var playlist = { Tswizzle: "Blank Space", Pentatonix: 'Say Something'}

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}