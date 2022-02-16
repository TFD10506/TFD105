//有時間再改掉
AOS.init();
//漢堡選單
$('#ham-icon').click(function () {
    $(this).toggleClass('open');
});
// 點擊按鈕，選單縮放
$("#ham-icon").on("click", function () {
    $(".ham-nav").slideToggle("slow");
});
$("#ham-menu-text").on("click", function () {
    $(this).children(".ham-submenu").slideToggle("slow", "linear", change());
});
function change() {
    let icon = document.getElementsByClassName("fa-angle-down")[0];
    icon.classList.toggle("-change");
}
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