const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bar-wrapper');
const progressBarProcent = [96, 97, 90, 80, 50, 80, 85, 77];

window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset, navbar.offsetTop)
    mainFn()

})

const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        // console.log('sticky')
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
    sections.forEach((section, index) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            //usuwanie podswietlenia
            navbarLinks.forEach(navbarLinks => {
                navbarLinks.classList.remove('change')
            })
            // dpdawanie podswietlenia
            navbarLinks[index].classList.add('change')
        }
    })
    // DYNANAMICZNE DODANIE PROCENTÓW
    // console.log(window.innerHeight)
    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-procent').forEach((element, index) => {
            element.style.width = `${progressBarProcent[index]}%`
            element.previousElementSibling.firstElementChild.textContent = progressBarProcent[index]
        })
    }
}
mainFn()

window.addEventListener('resize', () => {
    window.location.reload();
})