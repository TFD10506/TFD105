//有時間再改掉
// AOS.init();
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

// -----動畫效果區SRART-----
// 手機板
$( document ).ready(function() {
    let sliderItems_rwd = document.querySelectorAll('.slide-in-rwd');
    // 強制增加
    sliderItems_rwd.forEach(function (sliderItem) {
            sliderItem.classList.add("-scroll_active");
    });
});
//降低滾動判斷次數
function debounce(func, wait = 20, immediate = true) {
    var timeout;

    return function () {
        var context = this, args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};
//滾動效果
let sliderItems = document.querySelectorAll('.slide-in');
function checkSlide(e) {
    sliderItems.forEach(function (sliderItem) {
        // 取得sliderItems 1/100高度的定位點（卷軸垂直位移量＋視窗高度）- 1/100 sliderItems高度
        let slideInAt = (window.scrollY + window.innerHeight);
        // console.log("slideInAt:"+slideInAt);
        // 取得sliderItems底部定位點（利用sliderItems頂部定位點+sliderItems高度取得）
        let imageBottom = sliderItem.offsetTop + sliderItem.offsetHeight;
        // console.log("imageBottom:"+imageBottom);
        // 判斷視窗是否已經超過sliderItems高度1/100
        let isHalfShown = slideInAt > (sliderItem.offsetTop - sliderItem.offsetHeight);
        // console.log("sliderItem.offsetTop:"+sliderItem.offsetTop);
        // console.log("sliderItem.offsetHeight:"+sliderItem.offsetHeight);
        // console.log("isHalfShown:"+isHalfShown);
        // 判斷滾動範圍是否已經超過sliderItems底部（卷軸垂直位移量）
        let isNotScrolledPast = window.scrollY < imageBottom;
        // console.log("isNotScrolledPast:"+isNotScrolledPast);
        // 判斷是否超過sliderItems 1/100高，且視窗尚未超過sliderItems底部來增加或移除css效果
        if (isHalfShown && isNotScrolledPast) {
            sliderItem.classList.add("-scroll_active");
        }else{
            sliderItem.classList.remove("-scroll_active");
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));
// -----動畫效果區END-----

// -----TOP按鈕START-----
//top按鈕
var topbutton = document.getElementById("topBtn");

//scroll
window.onscroll = function () { scrollFunction() };
//判斷超過20
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}
// top.onclick = function(){
//     var top = document.documentElement.scrollTop
//     scrollBy(0,-top);
// }

// 點擊回到頂端
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 700);
}
// -----TOP按鈕END-----