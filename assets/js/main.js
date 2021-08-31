$(document).ready(function () {
    TweenMax.staggerFrom(
        $('.product'), // phần tử được chọn
        1, // thời gian chuyển động
        { top: 100, opacity: 0 },
        0.2 // thời gian cách nhau giữa mỗi hiệu ứng
    )
    $('.new-products-more').click(function () {
        $('.more').css('display', 'flex')
        $('.new-products-more').hide()
    })
});