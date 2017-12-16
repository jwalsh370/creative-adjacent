$(function(){

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(250)
    .next()
    .fadeIn(250)
    .end()
    .appendTo('#slideshow');
},  3000);
});
