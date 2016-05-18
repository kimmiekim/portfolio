$(document).on('ready', function(){


$( "#hamburger" ).on('click', function() {
  $( ".nav" ).slideToggle( "slow", function() {
  $( "#hamburger" ).hide();
  $( "#cross" ).show();
  });
});

$( "#cross" ).on('click', function() {
  console.log("it works");
  $( ".nav" ).slideToggle( "slow", function() {
  $( "#cross" ).hide();
  $( "#hamburger" ).show();
  });
});

$( "#cross" ).hide();

});
