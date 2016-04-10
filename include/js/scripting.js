$(document).ready(function(){

  // $('#navigation').css("float","left");

// $('div.container div.pull-right').css("margin-top","20px")

// var arrK=$('div.container nav.navbar  div.container div:eq(2)').css("margin-top","20px");

// console.log(arrK);
var carouselImgSrc=["images/home/carousel_large_men.JPG", "images/home/carousel_large_kids.jpg", "images/home/carousel_large_women.jpg"]

$('div.container div.container-fluid > div:eq(1) img').css("width","830px");

// $('div.container div.container-fluid').css("margin-top","70px");

$('div.container div.container-fluid div:first div ul').css("color", "blue");

$('div#secondRow button:first').click(function(){

  for (var i in carouselImgSrc){

    if(carouselImgSrc[i] == $('div.container div.container-fluid > div:eq(1) img').attr("src")){
        $('div.container div.container-fluid > div:eq(1) img').attr("src",function(){
          var index;
          if (i==0){
            index=carouselImgSrc.length -1;
          }
          else{
            index = i-1;
          }
        return carouselImgSrc[index];
      });
      break;
    }
    // console.log(index);
  }

});//click


$('div#secondRow button:eq(1)').click(function(){
  for (var i in carouselImgSrc){

    if(carouselImgSrc[i] == $('div.container div.container-fluid > div:eq(1) img').attr("src")){
        $('div.container div.container-fluid > div:eq(1) img').attr("src",function(){
          var index=0;
          var maxLength=carouselImgSrc.length -1;
          if (i==(maxLength)){
            index=0;
          }
          else{
            index = (+i) +1;
          }
        return carouselImgSrc[index];
      });
      break;
    }
  }
});//click

var play=0, k=0;
$('div#fourthRow button').click(function(){

  if (play==0){
    play=1;
    timeDelay=setInterval(
    function()
    {
      $('div.container div.container-fluid > div:eq(1) img').attr("src",function(){
           var maxLength=carouselImgSrc.length -1;
           if (k==(maxLength)){
             k=0;
           }
           else{
             k = (+k) +1;
           }
           return carouselImgSrc[k];
        });
    }, 1000);
  }
  else{
    clearInterval(timeDelay);
    play=0;
  }

});

$('div#thirdRow button:first').click(function(){
  $('div.container div.container-fluid > div:eq(1) img').slideUp( "slow", function() {
  });
});

$('div#thirdRow button:last').click(function(){
  $('div.container div.container-fluid > div:eq(1) img').slideDown( "slow", function() {
  });
});

$('div.container-fluid div.col-md-3 div:last-of-type button').click(function(){
  // alert("hurray")
  var property=$('div.col-md-3').css("float");
  if (property == "left")
    $('div.col-md-3').css("float","right");
  else {
    $('div.col-md-3').css("float","left");
  }
  // alert(property);
});



$('footer ul li a').mouseenter(function(){
  $(this).css("font-size","20px")
});

$('footer ul li a').mouseleave(function(){
  $(this).css("font-size","14px");
  // alert("Leave");
});

$('div.container div.container-fluid div:first div ul li').mouseenter(function(){
  $(this).css("margin-left","30");
});

$('div.col-md-3 div ul li').mouseleave(function(){
  $(this).css("margin-left","0");
});

$('div.container div.container-fluid > div:eq(1) img').click(function(){

  var sizeImg=$('div.container div.container-fluid > div:eq(1) img').prop("width");
  // alert(sizeImg)
  $('div.container div.container-fluid > div:eq(1) img').css("width",(sizeImg-20));
});


});// end (document).ready()
