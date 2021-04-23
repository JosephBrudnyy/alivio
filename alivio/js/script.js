$(function(){
    let isClicked = false

    $('.menu__button').on('click', function(){
        $('.header__menu').toggleClass('header__menu--active');
        $('.menu__button').toggleClass('menu__button--active');

        isClicked = !isClicked

        if(isClicked){
            $('body').css({'position' : 'fixed'})
        }
        else{
            $('body').css({'position' : 'unset'})
        }
        // position: fixed;
        // width: 100%;
        // overflow-y: scroll;
    })
})