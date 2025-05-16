

// burgur
    $(function(){

    $(".burgur").click(function(){
        
     if($(".burgur").hasClass('on')){
     //메뉴버튼이 "on" 클래스를 포함할 경우 "on"클래스를 제거
      $(".burgur").removeClass('on');
      $("#slide").removeClass('on');  //슬라이드 메뉴 원복
       
     }else{
     //메뉴버튼이 "on" 클래스를 포함하지 않을 경우 "on"클래스를 추가
       $(".burgur").addClass('on');
       $("#slide").addClass('on');
       
     }   
     
    });
 });


//  burgur top
 $(function(){

  $(".burgur .top-line").click(function(){
      
   if($(".burgur.top-line").hasClass('on')){
   //메뉴버튼이 "on" 클래스를 포함할 경우 "on"클래스를 제거
    $(".burgur.top-line").removeClass('on');
    $("#slide").removeClass('on');  //슬라이드 메뉴 원복
     
   }else{
   //메뉴버튼이 "on" 클래스를 포함하지 않을 경우 "on"클래스를 추가
     $(".burgur.top-line").addClass('on');
     $("#slide").addClass('on');
     
   }   
   
  });
});


// burgur bottom
$(function(){

  $(".burgur.bot-line").click(function(){
      
   if($(".burgur.bot-line").hasClass('on')){
   //메뉴버튼이 "on" 클래스를 포함할 경우 "on"클래스를 제거
    $(".burgur.bot-line").removeClass('on');
    $("#slide").removeClass('on');  //슬라이드 메뉴 원복
     
   }else{
   //메뉴버튼이 "on" 클래스를 포함하지 않을 경우 "on"클래스를 추가
     $(".burgur.bot-line").addClass('on');
     $("#slide").addClass('on');
     
   }   
   
  });
});