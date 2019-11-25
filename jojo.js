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
    var $jojo='<div class="content" style="left:'+(Pos[0]-25)+'px;top:'+(Pos[1]-25)+'px;">づ</div>';
    $("#Container").append($jojo);
    var target=$("#Container").children(":last-child");
    target.animate({
        "opacity":"1",
        "left":"-=30px",
        "top":"-=50px"
    },400,"linear");
    target.animate({
        "left":"+=20px",
        "top":"-=50px"
    },400,"linear");
    target.animate({
        "opacity":"1",
        "left":"-=30px",
        "top":"-=50px"
    },400,"linear");
    target.animate({
        "left":"+=20px",
        "top":"-=50px"
    },400,"linear",function(){
        target.remove();
    });
};