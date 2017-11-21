/**
 * Created by Administrator on 2017/10/26/026.
 */
($)(function() {
    /* 结束页面 */
    var valW = $(window).width()
    var valH = $(window).height()
    $('#videoEnd')[0].style.width = valW + 'px'
    $('#videoEnd')[0].style.height = valH + 'px'
    $('#clickBtn')[0].style.marginLeft = (valW - 340) / 2 + 'px'
    $('#clickBtn')[0].style.marginTop = (valH - 220) + 'px'
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
            $('.tip')[0].style.paddingTop = ($(window).height() - $(window).width())/2 + 'px'
            $('#videoEnd')[0].style.width = valW + 'px'
            $('#videoEnd')[0].style.height = valH + 'px'
            $('#clickBtn')[0].style.marginLeft = (valW - 340) / 2 + 'px'
            $('#clickBtn')[0].style.marginTop = (valH - 60) + 'px'
            $(".clickBtn").addClass('mobileS')
            if($(window).width()<$(window).height()) {
                $('.tip')[0].style.display = 'block'
                $('.tip')[0].style.paddingTop = ($(window).height() - $(window).width())/2 + 'px'
            } else {
                $('.tip')[0].style.display = 'none'
            }
            $(window).resize(function () {
                var valW = $(window).width()
                var valH = $(window).height()
                $('#videoEnd')[0].style.width = valW + 'px'
                $('#videoEnd')[0].style.height = valH + 'px'
                $('#clickBtn')[0].style.marginLeft = (valW - 340) / 2 + 'px'
                $('#clickBtn')[0].style.marginTop = (valH - 60) + 'px'
                if($(window).width()<$(window).height()) {
                    $('.tip')[0].style.display = 'block'
                } else {
                    $('.tip')[0].style.display = 'none'
                }
            });
        }
    }
    function audio () {
        var audio = document.getElementById('audio');
        audio.play();
        window.onload=function(){
            audio.play();
        }
        //JS绑定点击页面播放
        $('html').on('touchstart',function(){
            audio.play();
        });
        //微信下兼容自动播放
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    // load
    $(window).load(function () {
        device()
        audio()
    });
})