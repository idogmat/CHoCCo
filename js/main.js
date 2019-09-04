window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    //main-menu

    var clickMenu = document.querySelectorAll('.mini-menu')[1],
        closeMenu = document.querySelectorAll('.mini-menu')[0],
        tabletMenu = document.querySelector('.menu-tablet'),
        dotsMenu = document.querySelector('.fixed-menu');

    clickMenu.addEventListener('click', function (e) {
        e.preventDefault();
        if (tabletMenu.style.display = 'none') {
            tabletMenu.style.display = 'flex';
            dotsMenu.style.display = 'none';
            document.body.style.overflow = 'hidden';
        } else {
            tabletMenu.style.display = 'none';
            dotsMenu.style.display = 'block';
        }
    });
    closeMenu.addEventListener('click', function (e) {
        e.preventDefault();
        if (tabletMenu.style.display = 'flex') {
            tabletMenu.style.display = 'none';
            document.body.style.overflow = '';
            dotsMenu.style.display = 'block';
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

    //team
    const team = document.querySelectorAll('.staff-name');
    //  ulTeam = document.querySelectorAll('hidden-block-team');

    team.forEach(function (content) {
        content.addEventListener('click', function (e) {
            e.preventDefault();

            if (content.nextElementSibling.classList.contains("hidden-block-team")) {
                console.log(content.nextElementSibling);
                content.nextElementSibling.classList.remove('hidden-block-team');
                content.nextElementSibling.classList.add('block-team-active');
                content.classList.remove('arrow-active');
                content.classList.add('arrow-active');
            } else if (content.nextElementSibling.classList.contains("block-team-active")) {
                content.nextElementSibling.classList.remove('block-team-active');
                content.nextElementSibling.classList.add('hidden-block-team');
                content.classList.remove('arrow-active');
            }
        })
    });


    //accordeon

    const accordeonItem = document.querySelectorAll('.menu-accordeon__item'),
        accordeonContentPanes = document.querySelectorAll('.menu-accordeon__hidden-box');
    accordeonItem.forEach(function (accordeon) {
        const accordeonTitleRow = accordeon.querySelector('.menu-accordeon__title');
        // console.log(accordeonTitleRow);

        accordeonTitleRow.addEventListener('click', toggleAcordeon);

    });

    function toggleAcordeon(e) {
        e.preventDefault();
        accordeonContentPanes.forEach(function (content) {
            // console.log(content.previousElementSibling);
            if (content.previousElementSibling === e.target || content.previousElementSibling.firstChild === e.target) {
                content.classList.remove('menu-accordeon__hidden-box');
                content.classList.add('menu-accordeon__visible-box');
            } else {
                content.classList.remove('menu-accordeon__visible-box');
                content.classList.add('menu-accordeon__hidden-box');
            }
            const btnCross = content.querySelector('.acc-btn-cross');
            btnCross.onclick = function (e) {
                e.preventDefault();
                content.classList.remove('menu-accordeon__visible-box');
                content.classList.add('menu-accordeon__hidden-box');
                // console.log(content);
            }
        });

    }
    //our-team
    const reviewsLi = document.querySelector('.comment').children,
        controllerLi = document.querySelector('.check-persons').children,
        controller = document.querySelector('.check-persons');

    controller.addEventListener('click', function (e) {
        e.preventDefault();
        let li = e.target.closest('li');

        for (let i = 0; i < controllerLi.length; i++) {
            controllerLi[i].classList.remove('check-active');
            if (controllerLi[i] == li) {
                reviewsLi[i].classList.add('comment-person__active');
            } else {
                reviewsLi[i].classList.remove('comment-person__active');
            }
        }
        li.classList.add('check-active')
    })

    //form-secton
    const myForm = document.querySelector('#myForm'),
        sendButton = document.querySelector('#sendButton');

    sendButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (validateForm(myForm)) {
            const data = {
                name:myForm.elements.name.value,
                phone:myForm.elements.phone.value,
                comment:myForm.elements.comment.value,
                to:"borisdryabin@gmail"
            };
            
            

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load',() => {
                console.log(data);
                console.log(xhr.response);
            });
            console.log('все ок!');
        }

    });

    function validateForm(form) {
        let valid = true

        if (!validateField(form.elements.name)) {
            valid = false
        }
        if (!validateField(form.elements.phone)) {
            valid = false
        }
        if (!validateField(form.elements.comment)) {
            valid = false
        }
        return valid
    };

    function validateField(field) {
        if (!field.checkValidity()) {
            console.log(field);
            // field.validati.validationMessage;
            field.style.border = "1px solid #0f5a47";
            
            return false;
        } else {
            field.elements = '';
            field = field.style.border = "none";
            return true;
        }
    }

});