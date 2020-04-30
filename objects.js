var playlist = {
  MichaelJ : 'Thriller',
  BritneySpears : 'Stronger',
  Prince : 'Purple Rain'
  };
function updatePlaylist(playlist, artist, song){
  return Object.assign({},playlist,{[artist]: song})
}
