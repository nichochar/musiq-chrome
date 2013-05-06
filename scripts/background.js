var audioPlayer = {

  initializePlayer: function(src) {
    var audioTag = "<audio id='audio-player'  src='"+src+"' controls='true' autoload='true'/></audio>";
    $('body').append(audioTag);
  },

  initializeSoundCloudPlayer: function() {
    SC.initialize({
           client_id: '05c0a3124f51da642f038a52344b3dfa'
    });
  },

  playSoundcloudTrack: function(trackID) {
//SC.stream("/tracks/293", {
  //autoPlay: true,
  //ontimedcomments: function(comments){
    //console.log(comments[0].body);
  //}
//});
    //SC.oEmbed("http://soundcloud.com/forss/sets/soulhack", {color: "ff0066"},  document.getElementById("putTheWidgetHere"));
    SC.stream("/tracks/293", {autoPlay: true});
    //SC.stream("/tracks/"+toString(trackID), function(sound){
      //sound.play();
    //});

  }
}

document.addEventListener('DOMContentLoaded', function () {
  audioPlayer.initializePlayer("http://api.soundcloud.com/tracks/77149992/stream?client_id=05c0a3124f51da642f038a52344b3dfa");
 //audioPlayer.initializeSoundCloudPlayer();
  //audioPlayer.playSoundcloudTrack(293);
});
