// Add song to the queue
function addSong() {
}

// Remove song to the queue
function removeSong() {
}

$(function() {
  $( "#list" ).sortable({
    axis: "y",
    start: function(event, ui) {
      $('a.close').css('display', 'none');
    },
  });
  $( "#list" ).disableSelection();
  
  $('#player').click(function() {
    console.log("HELLO");
    // console.log($(this).find('audio')[0]);
    // $(this).find('audio')[0].play();
  });
  
  $("li").hover(
    // Mouse In
    function(event) {
      $(this).find('a.close').css('display', 'block');
    },
    // Mouse Out
    function(event) {
      $(this).find('a.close').css('display', 'none');
    }
  );

  $('a.close').click(function() {
    $(this).hide();
    $(this).parent().slideUp('fast');
  });
});
		
