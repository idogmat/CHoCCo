window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    //main-menu

    var clickMenu = document.querySelectorAll('.mini-menu')[1],
        closeMenu = document.querySelectorAll('.mini-menu')[0],
        tabletMenu = document.querySelector('.menu-tablet');


    clickMenu.addEventListener('click', function (e) {
        e.preventDefault();
        if (tabletMenu.style.display = 'none') {
            tabletMenu.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            tabletMenu.style.display = 'none';

        }
    });
    closeMenu.addEventListener('click', function (e) {
        e.preventDefault();
        if (tabletMenu.style.display = 'flex') {
            tabletMenu.style.display = 'none';
            document.body.style.overflow = '';
        } else {
            tabletMenu.style.display = 'felx';
        }
    });

    // //slider
    let slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('#arrow-left'),
        next = document.querySelector('#arrow-right'),
        slideIndex = 1;

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('structure-block-visible');
            slides[i].classList.remove('structure-block-hidden');
            slides[slideIndex - 1].classList.add('structure-block-hidden');
            slides[slideIndex - 1].classList.remove('structure-block-visible');
            // slides[i].style.display = 'none';
            // slides[slideIndex - 1].style.display = 'flex';
        }

    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    
    //accordeon
    // function addClass(el,klass) {
    //     el.classList.add(klass);
    // }
    // function removeClass(el,klass) {
    //     el.classList.remove(klass);
    // }
    const accordeonItem = document.querySelectorAll('.menu-accordeon__item'),
    accordeonContentPanes =  document.querySelectorAll('.menu-accordeon__hidden-box');
        // console.log(accordeonItem);
        // console.log(accBlock);

        // accordeonItem[0].querySelector('.menu-accordeon__hidden-box').classList.add('menu-accordeon__visible-box');
    // const accBlock0 = accordeonItem[0].querySelector('.menu-accordeon__hidden-box'),
    // accBlock1 = accordeonItem[1].querySelector('.menu-accordeon__hidden-box'),
    // accBlock2 = accordeonItem[2].querySelector('.menu-accordeon__hidden-box');
    
    // console.log(accBlock0);

    accordeonItem.forEach(function(accordeon){
    const accordeonTitleRow = accordeon.querySelector('.menu-accordeon__title');
    console.log(accordeonTitleRow);

    accordeonTitleRow.addEventListener('click', toggleAcordeon);
    
});
function toggleAcordeon (e) {
    e.preventDefault();
    accordeonContentPanes.forEach(function(content){
        console.log(content.previousElementSibling);
        if (content.previousElementSibling === e.target || content.previousElementSibling.firstChild === e.target) {
            content.classList.remove('menu-accordeon__hidden-box');
            content.classList.add('menu-accordeon__visible-box');
        } else {
            content.classList.remove('menu-accordeon__visible-box');
            content.classList.add('menu-accordeon__hidden-box');
        }

    });

}
            

        
    
});