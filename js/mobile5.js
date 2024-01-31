$(document).ready(function(){

  $(".trigger").click(function(){
    $("nav").stop(true,true).fadeIn();
  });

  $("nav>a").click(function(){
    $("nav").fadeOut();
    return false;
  });

});