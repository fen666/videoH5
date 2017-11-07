$(function () {
    function device () {
        init()
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
            $(window).resize(function () {
                if ($(window).width() < $(window).height()) {
                    alert('请开启手机旋转屏幕功能，确保在横屏模式下浏览本视频 ！')
                }
            });
            if ($(window).width() < $(window).height()) {
                alert('请开启手机旋转屏幕功能，确保在横屏模式下浏览本视频 ！')
            }
        }
    }

    function init () {
        audio()
        video()
    }

    function audio () {
        var audio = document.getElementById('audio');
        audio.play();
        window.onload = function () {
            audio.play();
        }
        //JS绑定点击页面播放
        $('html').on('touchstart', function () {
            audio.play();
        });
        //微信下兼容自动播放
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }

    function video (index) {
        // 视频宽高设置
        var valW = $(window).width()
        var valH = $(window).height()
        $('.videoPlay')[0].style.width = valW + 'px'
        $('.videoPlay')[0].style.height = valH + 'px'
        $('#video')[0].style.width = valW + 'px'
        $('#video')[0].style.height = valH + 'px'
        // 自动播放视频
        var video = document.getElementById('video');
        video.play();
        setTimeout(pause, 5000)
        //微信下兼容自动播放
        document.addEventListener("WeixinJSBridgeReady", function () {
            video.play();
            setTimeout(pause, 5000)
        }, false);
        // 视频暂停
        function pause () {
            video.pause();
            alert('11')
            $('.videoPlay').on('click', function () {
                video.play();
            })
            $('.videoPlay').on('touchstart', function () {
                video.play();
            })
        }
        video.onended = function() {
            window.location.href = './page/endVideo.html'
        };
    }

    // onload
    $(window).load(function () {
        device()
    })
})