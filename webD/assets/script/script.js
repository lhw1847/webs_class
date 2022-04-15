(function($){
    // $(".submenu").css("display", "block");

    //첫 번째 유형(자식선택) : this
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").css("display", "block");
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").css("display", "none");
    // })

    //두 번째 유형(다중선택)
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display", "block");
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display", "none");
    // })

    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().slideDown(500);
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().slideUp(500);
    // })

    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slideDown(500);
    })
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp(500);
    })

    //탭 메뉴
    var tebMenu = $(".notice");
    tebMenu.find("ul > li > ul").hide();
    tebMenu.find("ul > li.active > ul").show();
    function tebList(e){
        e.preventDefault();
        var target = $(this);  //사용자가 클릭한 메뉴
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }
    tebMenu.find("ul > li > a").click(tebList);
})(jQuery);