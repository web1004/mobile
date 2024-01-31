$(document).ready(function(){

  /*메뉴버튼*/
  $(".trigger").click(function(){
    $(".gnb_list").stop(true,true).animate({left:0});
    $(".back").stop(true,true).fadeIn(); 
  });

  /*닫기버튼*/	
  $(".gnb_list .close").click(function(){  
    $(".gnb_list").stop(true,true).animate({left:"-60%"});
    $(".back").stop(true,true).fadeOut();
  });	
  
});