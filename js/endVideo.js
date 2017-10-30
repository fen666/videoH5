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
            $(".videoEnd")[0].style.padding = '30px 100px';
            $(".videoEnd")[0].style.margin = '70px';
        } else {  // mobile
            // var flexible = new Flexible(1008, 640, 'no_border');
            var flexible = new Flexible(1008, 640, 'no_border');
            $(".videoEnd")[0].style.background = '#1d1819';
            // $(".videoEnd")[0].style.padding = '50px 120px';
            // $(".videoEnd")[0].style.margin = '50px';
            // alert($(".videoEnd")[0].style.height)
            $(".videoEnd")[0].style.padding = '30px 100px';
            $(".videoEnd")[0].style.margin = '70px';
            $(".videoEnd")[0].style.minWidth = '1000px'
            // $(".videoEnd")[0].style.maxHeight = ($(".videoEnd")[0].style.height.replace('px', '') - 240) / 2 + 'px'
            $(".videoEnd")[0].style.position = 'absolute'
            $(".videoEnd")[0].style.left = '40px'
            $(".videoEnd")[0].style.top = '-570px'
            $('#clickBtn')[0].style.marginLeft = ($(".videoEnd")[0].style.height.replace('px', '') - 400 -200) / 2 + 'px'
            $('.now')[0].style.marginRight = '0'
        }
    }

    // load
    $(window).load(function () {
        device()
    });
})