import {Modal} from "./components/modal";

// Навигация в шапке
const navLinks = document.querySelectorAll(".header-nav__link");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        document.querySelector(".header-nav__link.active").classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});

// Навигация в модалке
const modalLinks = document.querySelectorAll(".modal-nav__link");

modalLinks.forEach(link => {
    link.addEventListener("click", event => {
        document.querySelector(".modal-nav__link.active").classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});

// Иконки heart /
const hearts = document.querySelectorAll('.card-heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('heart-active');
    });
});

// Модалка формы
const modalForm = new Modal("#modal", "#signup");
// Модалка навигации в мобилке
const modalNav = new Modal("#modal-nav", ".burger-menu");
