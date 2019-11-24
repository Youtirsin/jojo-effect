$(function(){
    $("body").click(clickAnime);
});
function getPos(e){
    var x = e.originalEvent.x || e.originalEvent.layerX || 0;
    var y = e.originalEvent.y || e.originalEvent.layerY || 0;
    return [x,y];
};
function clickAnime(e){
    var Pos=getPos(e);
    var jojo='<div class="content" style="left:'+(Pos[0]-25)+'px;top:'+(Pos[1]-25)+'px;">ゴ</div>';
    $("#Container").html(jojo);
    $(".content").animate({
        "opacity":"1",
        "left":"-=30px",
        "top":"-=50px"
    },400,"linear");
    $(".content").animate({
        "left":"+=20px",
        "top":"-=50px"
    },400,"linear",function(){
        $("#Container").html("");
    });
};