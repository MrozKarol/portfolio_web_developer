const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset, navbar.offsetTop)

    if (window.pageYOffset >= navbarOffsetTop) {
        // console.log('sticky')
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
})