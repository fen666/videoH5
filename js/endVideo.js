/**
 * Created by lf on 2017/10/26.
 */
($)(function () {
    // 视频结束
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
            // $(".videoEnd")[0].style.padding = '30px 100px';
            // $(".videoEnd")[0].style.margin = '70px';
        } else {  // mobile
          $(".videoEnd")[0].style.background = '#1d1819';
          var flexible = new Flexible(1008, 640, 'no_border');
          // $(".videoEnd")[0].style.padding = '30px 100px';
          // $(".videoEnd")[0].style.margin = '70px';
          $(".videoEnd")[0].style.minWidth = '1000px'
          // $(".videoEnd")[0].style.maxHeight = ($(".videoEnd")[0].style.height.replace('px', '') - 240) / 2 + 'px'
          $(".videoEnd")[0].style.position = 'absolute'
          $(".videoEnd")[0].style.left = '40px'
          $(".videoEnd")[0].style.top = '-570px'
          $('#clickBtn')[0].style.marginLeft = ($(".videoEnd")[0].style.height.replace('px', '') - 400 -200) / 2 + 'px'
          $('.now')[0].style.marginRight = '0'
          // window.addEventListener('orientationchange', function (event) {
          //     if (window.orientation == 180 || window.orientation == 0) {  // 竖屏
          //
          //     }
          //     if (window.orientation == 90 || window.orientation == -90) {  // 横屏
          //       // $(".videoEnd")[0].style.padding = '30px 120px';
          //       // $(".videoEnd")[0].style.margin = '50px';
          //       $(".videoEnd")[0].style.top = '0'
          //       alert($(window).width())
          //       $(".videoEnd")[0].style.maxWidth = $(window).width()
          //
          //     }
          // });
            // $(".videoEnd")[0].style.maxHeight = ($(".videoEnd")[0].style.height.replace('px', '') - 240) / 2 + 'px'
        }
    }

    // load
    $(window).load(function () {
        device()
    });
    $(window).resize(function () {
    // alert($(window).width())
    // alert($(document).height())
     if($(window).width()>960) {
       // alert('aa')
       var flexible = new Flexible(1008, 640, 'no_border');
       // $(".videoEnd")[0].style.padding = '30px 100px';
       $(".videoEnd")[0].style.margin = '100px';
       $(".videoEnd")[0].style.minWidth = '1000px'
       // $(".videoEnd")[0].style.maxHeight = ($(".videoEnd")[0].style.height.replace('px', '') - 240) / 2 + 'px'
       $(".videoEnd")[0].style.position = 'absolute'
       $(".videoEnd")[0].style.left = '40px'
       $(".videoEnd")[0].style.top = '-570px'
       $('#clickBtn')[0].style.marginLeft = ($(".videoEnd")[0].style.height.replace('px', '') - 400 -200) / 2 + 'px'
       $('.now')[0].style.marginRight = '0'
     } else{
       $(".videoEnd")[0].style.top = '0'
       // alert($(window).width())
       $(".videoEnd")[0].style.maxWidth = '640px'
       $(".videoEnd")[0].style.top = '-200px'
     }
    });
})