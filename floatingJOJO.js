$(function(){
    setInterval(() => {
        createJo();
    }, 500);
    createJo();
});
function getPos(e){
    var x = e.originalEvent.x || e.originalEvent.layerX || 0;
    var y = e.originalEvent.y || e.originalEvent.layerY || 0;
    return [x,y];
};
function createJo(){
    var x=$("body").width()*Math.random();
    var y=$("body").height();
    var $jojo='<div class="content" style="left:'+x+'px;top:'+(y-50)+'px;">づ</div>';
    $("#Container").append($jojo);
    var target=$("#Container").children(":last-child");
    var floating=setInterval(() => {
        target.animate({
            "opacity":"1",
            "left":"-=30px",
            "top":"-=50px",
            "font-size":"+=5px"
        },400,"linear");
        target.animate({
            "left":"+=20px",
            "top":"-=50px",
            "font-size":"+=5px"
        },400,"linear");
        if(parseInt(target.css("top"))<=-50){
            target.remove();
            clearInterval(floating);
        }
    }, 800);
};