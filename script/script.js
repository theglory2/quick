$(function(){
    // 실행문
    $(window).scroll(function(){
        var stn = $(document).scrollTop()+15; // 15px
        if(stn <= 90){ // 90px
            stn = 90;
        }
        $("#quick").stop().animate({top:stn},700);
    });
});