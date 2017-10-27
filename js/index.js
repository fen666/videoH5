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
    // alert($(window).width())
    if (system.win || system.mac || system.xll) {  // PC
      $("#circrlBox").addClass('scal')
    } else {  // mobile
      $('#circrlBox').addClass('scalSmall')
      window.addEventListener('orientationchange', function (event) {
        if (window.orientation == 180 || window.orientation == 0) {  // 竖屏
          // alert('scalSmall')
          // Circle 旋转定位
          var val = $(window).height() - $('#circrlBox').height() / 5 - $('#main').height() / 5
          $('#circrlBox')[0].style.marginTop = val - 50 + 'px'
          $('#circrlBox')[0].style.marginLeft = $('#circrlBox').width() / 2 + 'px'
        }
        if (window.orientation == 90 || window.orientation == -90) {  // 横屏
          var val = $(window).height() - $('#circrlBox').height() / 5 - $('#main').height() / 5
          $('#circrlBox')[0].style.marginLeft = val - 50 + 'px'
          $('#circrlBox')[0].style.marginTop = $('#circrlBox').width() / 2 + 'px'
        }
      });
    }
  }

  // 扇形画布
  // var canvas=document.getElementById('sector');//定义变量获取画布dom
  // var c=canvas.getContext('2d');//设置绘图环境2d
  console.log($('#sector'))
  var c = $('#sector')[0].getContext('2d');//设置绘图环境2d
  c.lineWidth = 1;//设置线宽
  c.strokeStyle = "#a87e50";//设置边颜色
  c.fillStyle = "#a87e50";
  //扇形
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
  // Circle 旋转定位

  // resize
  $(window).resize(function () {
    location.reload();
  });
  // onload
  $(window).load(function () {
    device()
  })
})