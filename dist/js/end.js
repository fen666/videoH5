$(function(){var i=$(window).width(),n=$(window).height();$("#videoEnd")[0].style.width=i-340+"px",$("#videoEnd")[0].style.height=n-200+"px",$("#clickBtn")[0].style.marginLeft=(i-340-400)/2+"px",$(window).load(function(){!function(){var i={win:!1,mac:!1,xll:!1},n=navigator.platform;i.win=0==n.indexOf("Win"),i.mac=0==n.indexOf("Mac"),i.x11="X11"==n||0==n.indexOf("Linux"),i.win||i.mac||i.xll?($(window).resize(function(){location.reload()}),$(".videoEnd")[0].style.background="#171112",$(".videoEnd")[0].style.padding="30px 100px",$(".videoEnd")[0].style.margin="70px"):($(window).resize(function(){var i=$(window).width(),n=$(window).height();$("#videoEnd")[0].style.width=i-340+"px",$("#videoEnd")[0].style.height=n-200+"px",$("#clickBtn")[0].style.marginLeft=(i-340-400)/2+"px",$(window).width()<$(window).height()&&alert("请开启手机旋转屏幕功能，确保在横屏模式下浏览本视频 ！")}),$(window).width()<$(window).height()&&alert("请开启手机旋转屏幕功能，确保在横屏模式下浏览本视频 ！"),$(".videoEnd")[0].style.background="#1d1819",$(".videoEnd")[0].style.padding="30px 120px 70px",$(".videoEnd")[0].style.margin="50px",$(".open img")[0].style.width="80%",$(".open img")[0].style.paddingLeft="10%",$(".clickBtn").addClass("mobileS"))}()})});