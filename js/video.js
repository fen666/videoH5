/**
 * Created by Administrator on 2017/10/26/026.
 */
($)(function() {
    var myPlayer = videojs('my-video');
    videojs("my-video").ready(function(){
        var myPlayer = this;
        myPlayer.play();
    });
    myPlayer.on("ended", function(){   // 视频结束-跳转结束页面
        window.location.href = '../page/endVideo.html'
    });
    // 视频宽高设置
    var valW = $(window).width()
    var valH = $(window).height()
    $('#my-video')[0].style.width = valW + 'px'
    $('#my-video')[0].style.height = valH + 'px'
    //微信下兼容自动播放
    document.addEventListener("WeixinJSBridgeReady", function () {
        videojs("my-video").ready(function(){
            var myPlayer = this;
            myPlayer.play();
        });
    }, false);
})