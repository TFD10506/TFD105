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
// // 點擊回到頂端
// function topFunction() {
//     $('html, body').animate({ scrollTop: 0 }, 700);
//     let sliderItems_rwd = document.querySelectorAll('.slide-in-rwd');
//     if (scrollTop == 0) {
//         sliderItems_rwd.classList.add("-scroll_active");
//     }
// }

// go to top
document.addEventListener('DOMContentLoaded', function () {
    $(function () {

        var $win = $(window);

        var $backToTop = $('#topBtn');

        // 當user滾動到離頂部200像素時，展示回到頂部按鈕

        $win.scroll(function () {

            if ($win.scrollTop() > 200) {

                $backToTop.show();
            } else {
                let sliderItems_rwd = document.querySelectorAll('.slide-in-rwd');
                sliderItems_rwd.forEach(function (sliderItem) {
                    sliderItem.classList.add("-scroll_active");
                });
                $backToTop.hide();
            }

        });

        // 當user點擊按鈕時，通過動畫效果返回頭部

        $backToTop.click(function () {

            $('html, body').animate({ scrollTop: 0 }, 700);

        });

    });
});
// -----TOP按鈕END-----
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
$(document).ready(function () {
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
        } else {
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


var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "101336992507672");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v13.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));