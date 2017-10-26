/**
 * Created by lf on 2017/10/26.
 */
($)(function() {
  // 视频结束
  var valW = $(window).width()
  var valH = $(window).height()
  $('#videoEnd')[0].style.width = valW-340+'px'
  $('#videoEnd')[0].style.height = valH-200+'px'
  $('#clickBtn')[0].style.marginLeft = (valW-340-400)/2+'px'
  // resize
  $(window).resize(function(){
      location.reload();
  });
})