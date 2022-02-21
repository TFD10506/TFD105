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
// console.log("sliderItems:"+sliderItems);
function checkSlide(e) {
    sliderItems.forEach(function(sliderItem) {
        // 取得sliderItems 1/2高度的定位點（卷軸垂直位移量＋視窗高度）- 1/4 sliderItems高度
        let slideInAt = (window.scrollY + window.innerHeight) - sliderItem.offsetHeight / 4;
        // console.log("slideInAt:"+slideInAt);
        // 取得sliderItems底部定位點（利用sliderItems頂部定位點+sliderItems高度取得）
        let imageBottom = sliderItem.offsetTop + sliderItem.offsetHeight;
        // console.log("imageBottom:"+imageBottom);
        // 判斷視窗是否已經超過sliderItems高度一半
        let isHalfShown = slideInAt > sliderItem.offsetTop;
        // console.log("isHalfShown:"+isHalfShown);
        // 判斷滾動範圍是否已經超過sliderItems底部（卷軸垂直位移量）
        let isNotScrolledPast = window.scrollY < imageBottom;
        // console.log("isNotScrolledPast:"+isNotScrolledPast);
        // 判斷是否超過sliderItems一半高，且視窗尚未超過sliderItems底部來增加或移除css效果
        if (!(isHalfShown && isNotScrolledPast)) {
            sliderItem.classList.remove("-scroll_active");
        } else {
            sliderItem.classList.add("-scroll_active");
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));