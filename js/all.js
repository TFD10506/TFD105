// 載入畫面
var $loading = $('#loading');
window.addEventListener("load", function () {
    setTimeout(function () {
        $loading.fadeOut(1000);
    }, 1000);
    setTimeout(function () {
        document.getElementsByClassName("loading")[0].remove();
    }, 2000);
});
//有時間再改掉
AOS.init();
// 滾輪判斷取消
// window.onscroll = function () {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     var navBg = document.getElementsByClassName("nav-index")[0];
//     // console.log(scrollTop)
//     if (scrollTop >= 500) {
//         navBg.style.background = "rgba(255, 255, 255)";
//         // navBg.style.boxShadow = "none";
//     } else if (scrollTop < 500) {
//         navBg.style.background = "rgba(255, 255, 255, 0.9)";
//         // navBg.style.boxShadow = "none";
//     }
// }