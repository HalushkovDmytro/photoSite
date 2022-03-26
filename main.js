
const burgerMenu = document.querySelector('.header__burger');
const burgerHeader = document.querySelector('.header__menu');
const headerLink = document.querySelector('.header__list');
const theLink1 = document.querySelector('.phone__menu1');
const theLink2 = document.querySelector('.phone__menu2');
const theLink3 = document.querySelector('.phone__menu3');
const theLink4 = document.querySelector('.phone__menu4');
const theLink5 = document.querySelector('.phone__menu5');
const cart = document.querySelector('.cart');


const modal = document.getElementById("#myModal");
const modalContent = document.getElementById("#myModalContent");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const modalBtn = document.getElementById("modal__btn");
const modalInput = document.getElementById("modal__input");
// modalInput.value

modalBtn.addEventListener('click',function () {
    console.log()
});
const readMore = document.getElementById("read__more");
const hidenText = document.querySelector(".banner__hided__text");
readMore.addEventListener('click',function () {
    hidenText.classList.toggle('banner__showed__text')
});

const footerSubmit = document.getElementById("footer__submit");

// const linker = document.body.querySelectorAll("a");
// linker.forEach((item) => {
// item.addEventListener('click',(e) => e.preventDefault())
// });

btn.addEventListener('click',function () {
    modal.style.display = "block";
    modalContent.style.display = "block";
    document.getElementById("contact").style.position = 'none';
});
modalBtn.addEventListener('click',function () {
    modal.style.display = "none";
    document.getElementById("contact").style.position = 'relative';
})
span.addEventListener('click',function () {
    modal.style.display = "none";
    document.getElementById('contact').style.position = 'relative';
});
window.addEventListener('click',function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('#contact').style.position = 'relative';
    }
});



cart.addEventListener('click',burgerFuncRemove);
function burgerFuncRemove() {
    burgerMenu.classList.remove('active');
    burgerHeader.classList.remove('active');
    document.body.classList.remove('lock');
}

burgerMenu.addEventListener('click',burgerFunc);
function burgerFunc() {
    burgerMenu.classList.toggle('active');
    burgerHeader.classList.toggle('active');
    document.body.classList.toggle('lock');
}

theLink1.addEventListener('click',burgerFuncRemove);
function burgerFuncRemove() {
    burgerMenu.classList.remove('active');
    burgerHeader.classList.remove('active');
    document.body.classList.remove('lock');
}
theLink2.addEventListener('click',burgerFuncRemove);
function burgerFuncRemove() {
    burgerMenu.classList.remove('active');
    burgerHeader.classList.remove('active');
    document.body.classList.remove('lock');
}
theLink3.addEventListener('click',burgerFuncRemove);
function burgerFuncRemove() {
    burgerMenu.classList.remove('active');
    burgerHeader.classList.remove('active');
    document.body.classList.remove('lock');
}
theLink4.addEventListener('click',burgerFuncRemove);
function burgerFuncRemove() {
    burgerMenu.classList.remove('active');
    burgerHeader.classList.remove('active');
    document.body.classList.remove('lock');
}
theLink5.addEventListener('click',burgerFuncRemove);
function burgerFuncRemove() {
    burgerMenu.classList.remove('active');
    burgerHeader.classList.remove('active');
    document.body.classList.remove('lock');
}

