/**
 * Created by Administrator on 2017/10/26/026.
 */
($)(function() {
    // 视频结束
    // var aud = document.getElementById("myAudio");
    $("#myAudio")[0].onended = function() {
        window.location.href = '../page/endVideo.html'
    };
})