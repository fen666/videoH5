$(function(){function i(){var i={win:!1,mac:!1,xll:!1},n=navigator.platform;i.win=0==n.indexOf("Win"),i.mac=0==n.indexOf("Mac"),i.x11="X11"==n||0==n.indexOf("Linux"),i.win||i.mac||i.xll?($(window).resize(function(){location.reload()}),$("#circrlBox").addClass("scal"),$("#main")[0].style.marginTop=($(window).height()-$("#main").height())/2+"px",$("#main")[0].style.marginLeft=-$("#main").width()/2+"px"):($("#circrlBox").addClass("scalSmall"),window.addEventListener("orientationchange",function(i){180!=window.orientation&&0!=window.orientation||($("#main")[0].style.marginTop=($(window).height()-$("#main").height()/5*3)/2+"px",$("#main")[0].style.marginLeft=-$("#main").width()/2+"px"),90!=window.orientation&&-90!=window.orientation||($("#main")[0].style.marginLeft=-$("#main").width()/2+"px",$("#main")[0].style.marginTop="20px")}))}var n=$("#sector")[0].getContext("2d");n.lineWidth=1,n.strokeStyle="#a87e50",n.fillStyle="#a87e50",n.moveTo(250,250),n.arc(250,250,249,0*Math.PI/6,1.5*Math.PI,!1),n.moveTo(250,250),n.arc(250,250,249,9*Math.PI/6,1.5*Math.PI,!0),n.fill(),n.beginPath(),n.lineWidth=1,n.strokeStyle="#1d1919",n.fillStyle="#1d1919",n.moveTo(250,250),n.arc(250,250,248,0*Math.PI/6,1.5*Math.PI,!1),n.moveTo(250,250),n.arc(250,250,248,9*Math.PI/6,1.5*Math.PI,!0),n.fill(),$(window).load(function(){i()})});