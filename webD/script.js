(function($){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    })
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    })

    var tebMenu = $(".tebMenu");
    tebMenu.find("ul > li > ul").hide();
    tebMenu.find("ul > li.active > ul").show();
    function tebList(e){
        e.preventDefault();
        var target = $(this);  //사용자가 클릭한 메뉴
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }
    tebMenu.find("ul > li > a").click(tebList);
})(jQuery);