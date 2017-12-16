$(function(){

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(250)
    .end()
    .appendTo('#slideshow');
},  3000);
// Date picker jquery.
// $( "#datepicker" ).datepicker({
//   altFormat: "yy-mm-dd"
// });

});
