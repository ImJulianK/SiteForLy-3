var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

var i = 1;
var nextSong = "";
var nomeMusica = "";
function setup() {
  document.getElementById('audio').addEventListener('ended', function () {
    i++;
    nextSong = "assets/audio/musica" + i + ".mp3";
    audioPlayer = document.getElementById('audio');
    audioPlayer.src = nextSong;
    audioPLayer.load();
    audioPlayer.play();
    if (i > 12) // this is the end of the songs.
    {
      i = 1;
    }
  }, false);
}
