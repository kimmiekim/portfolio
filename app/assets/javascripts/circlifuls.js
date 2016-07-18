$(document).on('ready page:load', function() {

// var myList = document.getElementsByClassName('languages')[0].offsetTop;
var myList = document.getElementsByClassName('languages')[0].offsetTop;

$(window).on("scroll", function(){
  var noCircleYet = $('#html svg').length == 0;
    if ($(window).scrollTop() > myList - 500 && noCircleYet) {
      $("#html").circliful({
      animationStep: 1.5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 20,
      text: "HTML5",
      percent: 99,
      percentageTextSize:0,
      foregroundColor: "#696969"

      });

      $("#CSS3").circliful({
      animationStep: 1.5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 20,
      text: "CSS3",
      percent: 99,
      percentageTextSize: 0,
      foregroundColor: "#696969",

      });

      $("#JavaScript").circliful({
      animationStep: 1.5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 20,
      text: "JavaScript",
      percent: 85,
      percentageTextSize: 0,
      foregroundColor: "#696969"

      });

      $("#JQuery").circliful({
      animationStep: 1.5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 20,
      text: "JQuery",
      percent: 85,
      percentageTextSize: 0,
      foregroundColor: "#696969"

      });

      $("#Ruby").circliful({
      animationStep: 1.5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 20,
      text: "Ruby",
      percent: 80,
      percentageTextSize: 0,
      foregroundColor: "#696969"

      });

      $("#RubyOnRails").circliful({
      animationStep: 1.5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 20,
      text: "Rails",
      percent: 80,
      percentageTextSize: 0,
      foregroundColor: "#696969"

      });
    };
  });


// var myList = document.getElementsByClassName('languages')[0].offsetTop;
//
// $( document ).ready(function() {
//       $("#html").circliful({
//            });
//       });
// $( document ).ready(function() {
//         $("#html").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 10,
//         backgroundBorderWidth: 20,
//         text: "HTML5",
//         percent: 99,
//         percentageTextSize: 0,
//         pointSize: 100,
//         foregroundColor: "#696969",
//
//     });
//     });

// $( document ).ready(function() {
//         $("#CSS3").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 10,
//         backgroundBorderWidth: 20,
//         text: "CSS3",
//         percent: 99,
//         percentageTextSize: 0,
//         foregroundColor: "#696969"
//
//     });
//     });


// $( document ).ready(function() {
//         $("#JavaScript").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 10,
//         backgroundBorderWidth: 20,
//         text: "JavaScript",
//         percent: 85,
//         percentageTextSize: 0,
//         foregroundColor: "#696969"
//
//     });
//     });

// $( document ).ready(function() {
//         $("#JQuery").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 10,
//         backgroundBorderWidth: 20,
//         text: "JQuery",
//         percent: 85,
//         percentageTextSize: 0,
//         foregroundColor: "#696969"
//
//     });
//     });

// $( document ).ready(function() {
//         $("#Ruby").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 10,
//         backgroundBorderWidth: 20,
//         text: "Ruby",
//         percent: 80,
//         percentageTextSize: 0,
//         foregroundColor: "#696969"
//
//     });
//     });

// $( document ).ready(function() {
//         $("#RubyOnRails").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 10,
//         backgroundBorderWidth: 20,
//         text: "RubyOnRails",
//         percent: 80,
//         percentageTextSize: 0,
//         foregroundColor: "#696969"
//
//     });
//     });

var list = document.getElementsByClassName('skills')[0].offsetTop;

$(window).on("scroll", function(){
  var noCircle = $('#Flexbox svg').length == 0;
    if ($(window).scrollTop() > list - 500 && noCircle) {
        $("#Flexbox").circliful({
        animationStep: 1.5,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 20,
        text: "Github",
        percent: 99,
        percentageTextSize: 0,
        foregroundColor: "rgba(230, 39, 57, 0.63)"
        });

        $("#Github").circliful({
        animationStep: 1.5,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 20,
        text: "UX/UI",
        percent: 99,
        percentageTextSize: 0,
        foregroundColor: "rgba(230, 39, 57, 0.63)"

        });

        $("#Project_management").circliful({
        animationStep: 1.5,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 20,
        text: "Sketch",
        percent: 85,
        percentageTextSize: 0,
        foregroundColor: "rgba(230, 39, 57, 0.63)"

        });

        $("#e-commerce").circliful({
        animationStep: 1.5,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 20,
        text: "Illustrator",
        percent: 90,
        percentageTextSize: 0,
        foregroundColor: "rgba(230, 39, 57, 0.63)"

        });

        $("#design").circliful({
        animationStep: 1.5,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 20,
        text: "Design",
        percent: 85,
        percentageTextSize: 0,
        foregroundColor: "rgba(230, 39, 57, 0.63)"

        });

        $("#team_work").circliful({
        animationStep: 1.5,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 20,
        text: "Ecommerce",
        percent: 90,
        percentageTextSize: 0,
        foregroundColor: "rgba(230, 39, 57, 0.63)"

        });



      };
    });
  });

    // $( document ).ready(function() {
    //         $("#Flexbox").circliful({
    //         animationStep: 1,
    //         foregroundBorderWidth: 10,
    //         backgroundBorderWidth: 20,
    //         text: "FlexBox",
    //         percent: 99,
    //         percentageTextSize: 0,
    //
    //     });
    //     });

    // $( document ).ready(function() {
    //         $("#Github").circliful({
    //         animationStep: 5,
    //         foregroundBorderWidth: 10,
    //         backgroundBorderWidth: 20,
    //         text: "GitHub",
    //         percent: 99,
    //         percentageTextSize: 0,
    //
    //     });
    //     });
    //
    //
    // $( document ).ready(function() {
    //         $("#Project_management").circliful({
    //         animationStep: 5,
    //         foregroundBorderWidth: 10,
    //         backgroundBorderWidth: 20,
    //         text: "Project Management",
    //         percent: 85,
    //         percentageTextSize: 0,
    //
    //     });
    //     });

    // $( document ).ready(function() {
    //         $("#e-commerce").circliful({
    //         animationStep: 5,
    //         foregroundBorderWidth: 10,
    //         backgroundBorderWidth: 20,
    //         text: "E-Commerce",
    //         percent: 90,
    //         percentageTextSize: 0,
    //
    //     });
    //     });

    // $( document ).ready(function() {
    //         $("#design").circliful({
    //         animationStep: 5,
    //         foregroundBorderWidth: 10,
    //         backgroundBorderWidth: 20,
    //         text: "Design",
    //         percent: 85,
    //         percentageTextSize: 0,
    //
    //     });
    //     });

    // $( document ).ready(function() {
    //         $("#team_work").circliful({
    //         animationStep: 5,
    //         foregroundBorderWidth: 10,
    //         backgroundBorderWidth: 20,
    //         text: "Team Work",
    //         percent: 90,
    //         percentageTextSize: 0,
    //
    //     });
    //     });
