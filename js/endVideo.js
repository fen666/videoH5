/**
 * Created by lf on 2017/10/26.
 */
($)(function() {
  // 视频结束
  var val = $(window).height()
  console.log($(window).height())
  console.log($('#circrlBox').height())
  console.log(val)
  $('#videoEnd')[0].style.height = val+'px'
})