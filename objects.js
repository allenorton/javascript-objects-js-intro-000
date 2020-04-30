var playlist = {
  MichaelJ : 'Thriller',
  BritneySpears : 'Stronger',
  Prince : 'Purple Rain'
  };
function updatePlaylist(playlist, artist, song){
  return playlist.assign({},playlist,{[artist]: song})
}
