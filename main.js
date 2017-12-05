$(()=>{
  $('#board').html(`



             <a href="#" onClick="start();">Start</a>



`);
});
$(window).resize(()=>{
  $('#board').css({
    position: absolute,
    left: ($(window).width() - $('#board').outerWidth())/2,
    top: ($(window).height() - $('#board').outerHeight())/2,
  });
});
