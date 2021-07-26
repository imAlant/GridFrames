var vali = $(".slider-size").val();
$("img").css({"height":vali,"width":vali}) ;

$(".slider-size").on("input",function(){
    var val = $(".slider-size").val();
    $("img").css({"height":val,"width":val}) ;
});

$(".slider-transform").on("input",function(){
    var valt = $(".slider-transform").val();
    $("img").css({"transform":"rotate("+valt+"deg)"}) ;
});