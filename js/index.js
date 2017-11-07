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
            $("#circrlBox").addClass('scal')
            $('.container').css('min-height', $(window).height())
            $('#main')[0].style.marginTop = ($(window).height() - $('#main').height()) / 2 + 'px'
            $('#main')[0].style.marginLeft = -$('#main').width() / 2 + 'px'
        } else {  // mobile
            $(window).resize(function () {
                var valH = $(window).height()
                $('#circrlBox').addClass('scalSmall')
                $('.container').css('min-height', valH)
                $('#main')[0].style.marginLeft = -$('#main').width() / 2 + 'px'
                $('#main')[0].style.marginTop = (valH - $('#main').height()) / 2 + 'px'
                if ($(window).width() < $(window).height()) {
                    alert('请开启手机旋转屏幕功能，确保在横屏模式下浏览本视频 ！')
                }
            });
            if ($(window).width() < $(window).height()) {
                alert('请开启手机旋转屏幕功能，确保在横屏模式下浏览本视频 ！')
            }
            $('#circrlBox').addClass('scalSmall')
            $('.container').css('min-height', $(window).height())
            $('#main')[0].style.marginLeft = -$('#main').width() / 2 + 'px'
            $('#main')[0].style.marginTop = ($(window).height() - $('#main').height()) / 2 + 'px'
            $('.birds img')[0].style.width = '250px'
            $('.birds img')[0].style.height = '150px'
            $('.birds1 img')[0].style.width = '250px'
            $('.birds1 img')[0].style.height = '150px'
            $('.birds1').addClass('new')
            $('.birds2 img')[0].style.width = '250px'
            $('.birds2 img')[0].style.height = '150px'
        }
    }

    /* 扇形 begin */
    var c = $('#sector')[0].getContext('2d');//设置绘图环境2d
    c.lineWidth = 1;//设置线宽
    c.strokeStyle = "#a87e50";//设置边颜色
    c.fillStyle = "#a87e50";
    c.moveTo(250, 250);
    c.arc(250, 250, 249, Math.PI * 0 / 6, Math.PI * 1.5, false);
    c.moveTo(250, 250);
    c.arc(250, 250, 249, Math.PI * 9 / 6, Math.PI * 1.5, true);
    c.fill()
    c.beginPath();
    c.lineWidth = 1;//设置线宽
    c.strokeStyle = "#1d1919";//设置边颜色
    c.fillStyle = "#1d1919";
    c.moveTo(250, 250);
    c.arc(250, 250, 248, Math.PI * 0 / 6, Math.PI * 1.5, false);
    c.moveTo(250, 250);
    c.arc(250, 250, 248, Math.PI * 9 / 6, Math.PI * 1.5, true);
    c.fill()
    /* 扇形 end */

    function init () {
        audio()
        $('.fiveBtn').find('button').each(function () {
            if ($(this).prop('disabled')) {
                $(this).addClass('errorClick')
                $(this).removeClass('okClick')
            } else {
                $(this).addClass('okClick')
                $(this).removeClass('errorClick')
            }
            $(this).click(function () {
                $('.container')[0].style.zIndex = '1';
                $('.videoPlay')[0].style.display = 'block';
                var index = $(this).index()
                video(index)
                audio()
                if ($(this).prop("disabled") === false) { // 点击当前未禁用
                    $(this).next('button').removeAttr("disabled", 'disabled')
                    if ($(this).next('button').prop('disabled')) {
                        $(this).next('button').addClass('errorClick')
                        $(this).next('button').removeClass('okClick')
                    } else {
                        $(this).next('button').addClass('okClick')
                        $(this).next('button').removeClass('errorClick')
                    }
                }
            })
        })
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
        $('.video-js')[0].style.width = valW + 'px'
        $('.video-js')[0].style.height = valH + 'px'
        $('#my-video_html5_api')[0].style.width = valW + 'px'
        $('#my-video_html5_api')[0].style.height = valH + 'px'
        // 自动播放视频
        var myPlayer = videojs('my-video');
        var videoUrl = './video/video' + parseInt(index + 1) + '.mp4';
        videojs("my-video", {}, function () {
            window.myPlayer = this;
            $("#mymoda .video-con #my-video source").attr("src", videoUrl);
            myPlayer.src(videoUrl);
            myPlayer.load(videoUrl);
            myPlayer.play();
        });
        //微信下兼容自动播放
        document.addEventListener("WeixinJSBridgeReady", function () {
            videojs("my-video").ready(function () {
                var myPlayer = this;
                myPlayer.play();
            });
        }, false);
        //JS绑定点击页面播放
        $('.videoPlay').on('touchstart', function () {
            clearTimeout(play)
            videojs("my-video").ready(function () {
                var myPlayer = this;
                myPlayer.play();
                // setTimeout(end, 17000)
                play = setTimeout(end, 17000)
            });
        })
        // 视频结束-展示结束页面
        function end () {
            $('.container')[0].style.zIndex = '200';
            $('.videoPlay')[0].style.display = 'none';
            $('.videoPlay')[0].style.width = 0 + 'px'
            $('.videoPlay')[0].style.height = 0 + 'px'
            $('.video-js')[0].style.width = 0 + 'px'
            $('.video-js')[0].style.height = 0 + 'px'
            $('#my-video_html5_api')[0].style.width = 0 + 'px'
            $('#my-video_html5_api')[0].style.height = 0 + 'px'
            if (index + 1 === 5) {
                window.location.href = './page/endVideo.html'
            }
        }
        myPlayer.on("ended", function () {
            $('.container')[0].style.zIndex = '200';
            $('.videoPlay')[0].style.display = 'none';
            $('.videoPlay')[0].style.width = 0 + 'px'
            $('.videoPlay')[0].style.height = 0 + 'px'
            $('.video-js')[0].style.width = 0 + 'px'
            $('.video-js')[0].style.height = 0 + 'px'
            $('#my-video_html5_api')[0].style.width = 0 + 'px'
            $('#my-video_html5_api')[0].style.height = 0 + 'px'
            if (index + 1 === 5) {
                window.location.href = './page/endVideo.html'
            }
        });
    }

    // onload
    $(window).load(function () {
        device()
    })
})