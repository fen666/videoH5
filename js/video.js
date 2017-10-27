/**
 * Created by Administrator on 2017/10/26/026.
 */
($)(function() {
    // 视频结束-跳转结束页面
    $("#myAudio")[0].onended = function() {
        window.location.href = '../page/endVideo.html'
    };
    // $("#myAudio")[0].onerror = function () {
    //     alert('error')
    //     alert(error.code)
    // }
})