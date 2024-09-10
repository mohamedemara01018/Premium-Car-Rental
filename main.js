const listBtn = document.getElementById('list-btn');
const header_ul = document.getElementById('header-ul');
const header_icon = document.querySelector('header nav .list .list-icon')


listBtn.addEventListener('click', () => {
    header_ul.classList.toggle('open')
    let isOpen = header_ul.classList.contains('open');
    header_icon.setAttribute('class', isOpen ? 'ri-close-line' : ' ri-list-check')

})

header_ul.addEventListener('click', (e) => {
    header_ul.classList.remove('open')
    header_icon.setAttribute('class', ' ri-list-check')
})

const scrollRevealOption = {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
}

ScrollReveal().reveal(".landing h1", {
    ...scrollRevealOption,


})

ScrollReveal().reveal(".landing .time", {
    ...scrollRevealOption,
    origin: 'left',

    delay: 300

})

ScrollReveal().reveal(".landing .img img", {
    ...scrollRevealOption,
    origin: 'right',

    delay: 600

})

ScrollReveal().reveal(".landing .img .scroll-dowmn", {
    ...scrollRevealOption,
    origin: 'bottom',

    delay: 900

})

ScrollReveal().reveal(".wide-range .cars-section .car-cards", {
    duration: 500,
    interval: 300

})

ScrollReveal().reveal(".hero .right-section", {
    ...scrollRevealOption,
    origin: 'right',

    delay: 300

})

ScrollReveal().reveal(".hero .left-section h1 ", {
    ...scrollRevealOption,
    origin: 'bottom',

    delay: 600

})

ScrollReveal().reveal(".hero .left-section p", {
    ...scrollRevealOption,
    origin: 'bottom',

    delay: 900

})

ScrollReveal().reveal(".hero .left-section button", {
    ...scrollRevealOption,
    origin: 'bottom',

    delay: 1200

})


const selectCards = document.querySelectorAll(".select_card");
selectCards[0].classList.add("show_info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
    if (eventName === "slideChangeTransitionStart") {
        const index = args && args[0].realIndex;
        priceEl.innerText = price[index];
        selectCards.forEach((item) => {
            item.classList.remove("show_info");
        });
        selectCards[index].classList.add("show_info");
    }
}

const swiper = new Swiper(".select_container .swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        depth: 500,
        modifier: 1,
        scale: 0.75,
        slideShadows: false,
        stretch: -100,
    },

    onAny(event, ...args) {
        updateSwiperImage(event, args);
    },
});

ScrollReveal().reveal(".stories .container .card1", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 300

})

ScrollReveal().reveal(".stories .container .card2", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 600

})


ScrollReveal().reveal(".stories .container .card3", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 900

})

ScrollReveal().reveal(".car-rental .bottom-img", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 300

})


ScrollReveal().reveal(".car-rental div h1", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 600

})


ScrollReveal().reveal(".car-rental div div", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 900

})

