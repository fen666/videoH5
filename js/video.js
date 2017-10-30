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
    } else {  // mobile
      var flexible = new Flexible(1008, 640, 'no_border');
    }
  }
      // onload
      $(window).load(function () {
        device()
      })
})