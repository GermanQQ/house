

function bg(){
background = document.querySelector('.moon');
background.style.transform = 'translateY(0%)';
document.querySelector('.full').style.transform = 'translateY(0%)';
document.querySelector('.left').style.transform = 'translateX(0%)';
document.querySelector('.up').style.transform = 'translateX(0%)';
document.querySelector('.house').style.transform = 'translateX(0%)';
document.querySelector('.house').style.opacity = '1';
document.querySelector('.intro').style.opacity ='1';
document.querySelector('header').style.opacity = '1';
}
bg();

// function overflow(){
//     document.querySelector('body').style.overflow = 'auto';
// }
// setTimeout(overflow, 5000);

function search(){
        document.querySelector('.input__search').style.width = '100%';
        document.querySelector('.input__search').style.cursor = 'text';
        document.querySelector('.input__search').style.opacity = '1';

}



//Якорные ссылки js

function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
}