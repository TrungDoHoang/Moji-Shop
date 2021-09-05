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
let multiCarousel = document.querySelector('.multi-carousel')
let items = multiCarousel.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

$('.header-cart').click(() => {
    $('.header-cart-list').toggleClass('open')
    // if($('.header-cart-list').hasClass('open')){
    //     $('.header-cart-list').addClass('close')
    //     $('.header-cart-list').removeClass('open')
    // } else if($('.header-cart-list').hasClass('close')){
    //     $('.header-cart-list').addClass('open')
    //     $('.header-cart-list').removeClass('close')
    // }
})
$('.header-cart').focusout(() => {
    $('.header-cart-list').removeClass('open')
})
