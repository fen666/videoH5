/**
 * Created by Administrator on 2017/10/26/026.
 */
($)(function() {
    // 自动播放视频
    var myPlayer = videojs('my-video');
    videojs("my-video").ready(function(){
        var myPlayer = this;
        myPlayer.play();
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
    //JS绑定自动播放（操作window时，播放音乐）
    $(window).one('touchstart', function(){
        videojs("my-video").ready(function(){
            var myPlayer = this;
            myPlayer.play();
        });
    })
    // 视频结束-展示结束页面
    myPlayer.on("ended", function(){
        $("body").css("background", "url('../images/bgEnd.png') repeat")
        $(".videoEnd").fadeIn(3000)
        $(".main").fadeOut(2000)
        $("#my-video").fadeOut(2000)
    });
    /* 结束页面 */
    var valW = $(window).width()
    var valH = $(window).height()
    $('#videoEnd')[0].style.width = valW - 340 + 'px'
    $('#videoEnd')[0].style.height = valH - 200 + 'px'
    $('#clickBtn')[0].style.marginLeft = (valW - 340 - 400) / 2 + 'px'
    function device () {
        //平台、设备和操作系统
        var system = {
            win: false,
            mac: false,
            xll: false
        };
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        if (system.win || system.mac || system.xll) {  // PC
            // resize
            $(window).resize(function () {
                location.reload();
            });
            $(".videoEnd")[0].style.background = '#171112';
            $(".videoEnd")[0].style.padding = '30px 100px';
            $(".videoEnd")[0].style.margin = '70px';
        } else {  // mobile
            $(".videoEnd")[0].style.background = '#1d1819';
            $(".videoEnd")[0].style.padding = '50px 120px';
            $(".videoEnd")[0].style.margin = '50px';
        }
    }
    // load
    $(window).load(function () {
        device()
    });
})