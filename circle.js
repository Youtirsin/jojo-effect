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
    var circle='<div class="cir" style="left:'+(Pos[0])+'px;top:'+(Pos[1])+'px;"></div>';
    $("#Container").html(circle);
    $(".cir").animate({
        "width": "50px",
        "height": "50px",
        "opacity":"1",
        "left":"-=25px",
        "top":"-=25px"
    },150,"linear");
    $(".cir").animate({
        "width": "100px",
        "height": "100px",
        "opacity":"0",
        "left":"-=25px",
        "top":"-=25px"
    },150,"linear",function(){
        $("#Container").html("");
    });
};