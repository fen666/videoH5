$(function(){function i(){var i={win:!1,mac:!1,xll:!1},a=navigator.platform;if(i.win=0==a.indexOf("Win"),i.mac=0==a.indexOf("Mac"),i.x11="X11"==a||0==a.indexOf("Linux"),i.win||i.mac||i.xll)$(window).resize(function(){location.reload()}),$("#circrlBox").addClass("scal"),$("#main")[0].style.marginTop=($(window).height()-$("#main").height())/2+"px",$("#main")[0].style.marginLeft=-$("#main").width()/2+"px";else{new Flexible(1008,640,"no_border");$("#circrlBox").addClass("scalSmall"),$("#main")[0].style.marginTop=-($(window).height()-$("#main").height()/5*3+100)/2+"px",$("#main")[0].style.marginLeft=-$("#main").width()/2+"px"}}var a=$("#sector")[0].getContext("2d");a.lineWidth=1,a.strokeStyle="#a87e50",a.fillStyle="#a87e50",a.moveTo(250,250),a.arc(250,250,249,0*Math.PI/6,1.5*Math.PI,!1),a.moveTo(250,250),a.arc(250,250,249,9*Math.PI/6,1.5*Math.PI,!0),a.fill(),a.beginPath(),a.lineWidth=1,a.strokeStyle="#1d1919",a.fillStyle="#1d1919",a.moveTo(250,250),a.arc(250,250,248,0*Math.PI/6,1.5*Math.PI,!1),a.moveTo(250,250),a.arc(250,250,248,9*Math.PI/6,1.5*Math.PI,!0),a.fill(),$(window).load(function(){i()})});