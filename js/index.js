$(function () {
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
            if ($(window).width() < $(window).height()) {
                $('.tip')[0].style.display = 'block'
            } else {
                $('.tip')[0].style.display = 'none'
            }
            $(window).resize(function () {
                if($(window).width()<$(window).height()) {
                    $('.tip')[0].style.display = 'block'
                } else {
                    $('.tip')[0].style.display = 'none'
                }
                // 视频宽高设置
                var valW = $(window).width()
                var valH = $(window).height()
                $('.videoPlay')[0].style.width = valW + 'px'
                $('.videoPlay')[0].style.height = valH + 'px'
                $('#video')[0].style.width = valW + 'px'
                $('#video')[0].style.height = valH + 'px'
            });
            // 视频宽高设置
            var valW = $(window).width()
            var valH = $(window).height()
            $('.videoPlay')[0].style.width = valW + 'px'
            $('.videoPlay')[0].style.height = valH + 'px'
            $('#video')[0].style.width = valW + 'px'
            $('#video')[0].style.height = valH + 'px'
        }
    }

    function audio () {
        // 自动播放音频
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

    function video () {
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
        //微信下兼容自动播放
        document.addEventListener("WeixinJSBridgeReady", function () {
            video.play();
        }, false);
        // 暂停时间点
        var stepTarget = 'step1'
        var timePoint = {
            step1: 4,
            step2: 9,
            step3: 13
        }
        // 播放位置改变时触发
        video.ontimeupdate = function () {
            // console.log(video.currentTime)
            var current = video.currentTime
            if (parseInt(current) === timePoint.step1 && stepTarget === 'step1'){
                pause()
                stepTarget = 'step2'
            } else if (parseInt(current) === timePoint.step2 && stepTarget === 'step2'){
                pause()
                stepTarget = 'step3'
            } else if (parseInt(current) === timePoint.step3 && stepTarget === 'step3'){
                pause()
                stepTarget = 'step4'
            }
        }
        // 视频暂停
        function pause () {
            video.pause();
            $('.point')[0].style.display = 'block'
            $('html').on('click', function () {
                video.play();
                $('.point')[0].style.display = 'none'
            })
            $('html').on('touchstart', function () {
                video.play();
                $('.point')[0].style.display = 'none'
            })
        }
        video.onended = function() {
            window.location.href = './page/end.html'
        };
    }

    // onload
    $(window).load(function () {
        device()
        audio()
        video()
    })
    // resize
    // $(window).resize(function () {
    //     location.reload();
    // });
})