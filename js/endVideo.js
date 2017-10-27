/**
 * Created by lf on 2017/10/26.
 */
($)(function() {
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
    // alert($(window).width())
    if (system.win || system.mac || system.xll) {  // PC
      $(".videoEnd")[0].style.background = '#171112';
    } else {  // mobile
      alert('mobile')
      $(".videoEnd")[0].style.background = '#1d1819';
      window.addEventListener('orientationchange', function (event) {
        if (window.orientation == 180 || window.orientation == 0) {  // 竖屏
          alert('shu')
        }
        if (window.orientation == 90 || window.orientation == -90) {  // 横屏
          alert('heng')
          $(".videoEnd")[0].style.margin = '30px';
        }
      });
    }
  }
  // 视频结束
  var valW = $(window).width()
  var valH = $(window).height()
  $('#videoEnd')[0].style.width = valW-340+'px'
  $('#videoEnd')[0].style.height = valH-200+'px'
  $('#clickBtn')[0].style.marginLeft = (valW-340-400)/2+'px'
  // load
  $(window).load(function(){
    device()
  });
  // resize
  $(window).resize(function () {
    location.reload();
  });
})