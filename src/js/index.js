import { Modal } from "./components/modal";
import Swiper from "swiper"; // Инициализация слайдера
import { Navigation, Pagination } from "swiper/modules"; // Инициализация иконок, пагинации и т.д.

// Навигация в шапке
const navLinks = document.querySelectorAll(".header-nav__link");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        document
            .querySelector(".header-nav__link.active")
            .classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});

// Навигация в модалке
const modalLinks = document.querySelectorAll(".modal-nav__link");

modalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        document
            .querySelector(".modal-nav__link.active")
            .classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});

// Модалка формы
const modalForm = new Modal("#modal", "#signup");
// Модалка навигации в мобилке
const modalNav = new Modal("#modal-nav", ".burger-menu");

/* Слайдер на стартовой странице */
const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: "horizontal",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // eslint-disable-next-line multiline-comment-style
    // // пагинация сверху
    // Pagination: {
    //     El: ".swiper-pagination",
    //     Type: "progressbar",
    // },
});

const inputText = document.querySelector("#register-username");

/* Обработчик событий текстовый инпут */
inputText.addEventListener("change", (event) => {
    console.log(event.target.value);

    const error = document.querySelector("#username-error");

    // Регулярное выражение для проверки имени пользователя
    const usernamePattern = /^[a-zA-Zа-яА-Я]{3,}$/;

    if (!event.target.value) {
        error.textContent = "";
        inputText.classList.remove("invalid");
    } else if (!usernamePattern.test(event.target.value)) {
        error.textContent = "Имя пользователя не соответствует требованиям";
        inputText.classList.add("invalid");
    } else {
        error.textContent = "";
        inputText.classList.remove("invalid");
    }
});
