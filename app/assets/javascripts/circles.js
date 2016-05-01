function Circle() {
  this.element = $('<div class = "circle"></div>');
  this.diameter = 1 + Math.ceil(Math.random() * 100);
  this.position = {
    x: this.newPosition(),
    y: this.newPosition()
  }

  this.element.css({
    width: this.diameter + 'px',
    height: this.diameter + 'px',
    top: this.position.y,
    left: this.position.x,
  });
}

Circle.prototype.newPosition = function () {
  return Math.random() * (100 - this.diameter)
}

Circle.prototype.newPosition = function () {
  return Math.random() * (400 - this.diameter)
}

Circle. prototype.move = function () {
  var self = this;

  this.element.animate({
    top: this.newPosition(),
    left: this.newPosition()
  }, 1000, 'swing', function () {
    self.move();
  });
}

$(document).on('ready', function(){
  var numberOfCircles = 7;

  for(var i = 0; i < numberOfCircles; i++){
    var theCircle = new Circle();
    $('.top_box').append(theCircle.element);
    theCircle.move();
  }
  // for(var i = 0; i < numberOfCircles; i++){
  //   var colors = ["rgba(191, 63, 112, 0.6)","rgba(239, 247, 83, 0.82)","rgba(145, 252, 204, 0.82)"];
  //   var rand = Math.floor(Math.random()*colors.length);
  //   $('.circle').css("background-color", colors[rand]);
  // }
});
