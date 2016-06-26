$(document).on('ready', function(){
  function roll(){
    var curr = 2;
    var count = 9;
    $('#greetings .hello:nth-child(1)').show("slide", {direction: "down"}, 500);

    setInterval(function(){
      //console.log('C:'++curr);
      $('#greetings .hello').hide();
      $('#greetings .hello:nth-child('+curr+')').delay(100).show("slide", {direction: "down"}, 500);
      curr++;
      if (curr == count+1){
        $('#greetings .hello:nth-child(9)').delay(500).hide();
        curr = 1;
      }
    }, 2000);
  }
  roll();
});
