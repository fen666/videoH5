$(function() {
    // 扇形画布
    // var canvas=document.getElementById('sector');//定义变量获取画布dom
    // var c=canvas.getContext('2d');//设置绘图环境2d
    console.log($('#sector'))
    var c=$('#sector')[0].getContext('2d');//设置绘图环境2d
    c.lineWidth=1;//设置线宽
    c.strokeStyle="#a87e50";//设置边颜色
    c.fillStyle="#a87e50";
    //扇形
    c.moveTo(250,250);
    c.arc(250,250,249,Math.PI*0/6,Math.PI*1.5,false);
    c.moveTo(250,250);
    c.arc(250,250,249,Math.PI*9/6,Math.PI*1.5,true);
    c.fill()
    c.beginPath();
    c.lineWidth=1;//设置线宽
    c.strokeStyle="#1d1919";//设置边颜色
    c.fillStyle="#1d1919";
    c.moveTo(250,250);
    c.arc(250,250,248,Math.PI*0/6,Math.PI*1.5,false);
    c.moveTo(250,250);
    c.arc(250,250,248,Math.PI*9/6,Math.PI*1.5,true);
    c.fill()
    // Circle 旋转定位
    var val = $(window).height() - $('#circrlBox').height()
    $('#circrlBox')[0].style.marginTop = val/2+'px'
    // resize
    $(window).resize(function(){
        location.reload();
    });
})