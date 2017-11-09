/**
 * Created by Administrator on 2017/10/26/026.
 */
($)(function() {
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
            $('.tip')[0].style.paddingTop = ($(window).height() - $(window).width())/2 + 'px'
            $(".videoEnd")[0].style.background = '#1d1819';
            $(".videoEnd")[0].style.padding = '30px 120px 70px';
            $(".videoEnd")[0].style.margin = '50px';
            $(".open img")[0].style.width = '70%';
            $(".open img")[0].style.paddingLeft = '15%';
            $(".clickBtn").addClass('mobileS')
            if($(window).width()<$(window).height()) {
                $('.tip')[0].style.display = 'block'
                $(".videoEnd")[0].style.margin = '50px';
                $('.tip')[0].style.paddingTop = ($(window).height() - $(window).width())/2 + 'px'
            } else {
                $('.tip')[0].style.display = 'none'
            }
            $(window).resize(function () {
                var valW = $(window).width()
                var valH = $(window).height()
                $('#videoEnd')[0].style.width = valW - 340 + 'px'
                $('#videoEnd')[0].style.height = valH - 200 + 'px'
                $('#clickBtn')[0].style.marginLeft = (valW - 340 - 400) / 2 + 'px'
                if($(window).width()<$(window).height()) {
                    $('.tip')[0].style.display = 'block'
                    $(".videoEnd")[0].style.margin = '50px';
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