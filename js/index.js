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
            $("#circrlBox").addClass('scal')
            // Circle 旋转定位
            $('#main')[0].style.marginTop = ($(window).height() - $('#main').height())/2 + 'px'
            $('#main')[0].style.marginLeft = -$('#main').width() / 2 + 'px'
        } else {  // mobile
            $('#circrlBox').addClass('scalSmall')
            window.addEventListener('orientationchange', function (event) {
                if (window.orientation == 180 || window.orientation == 0) {  // 竖屏
                    $('#main')[0].style.marginTop = ($(window).height() - $('#main').height()/5*3)/2 + 'px'
                    $('#main')[0].style.marginLeft = -$('#main').width() / 2 + 'px'
                }
                if (window.orientation == 90 || window.orientation == -90) {  // 横屏
                    $('#main')[0].style.marginLeft =-$('#main').width() / 2 + 'px'
                    $('#main')[0].style.marginTop = '20px'
                }
            });
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

    // onload
    $(window).load(function () {
        device()
    })
})