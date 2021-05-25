
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const conteiner = document.querySelector('.conteiner')


left.addEventListener('mouseenter', () => {
    conteiner.classList.add('hover-left')
})

left.addEventListener('mouseleave', () => {
    conteiner.classList.remove('hover-left')
})


right.addEventListener('mouseenter', () => {
    conteiner.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
    conteiner.classList.remove('hover-right')
})

// /////

left.addEventListener('touchstart', () => {
    conteiner.classList.add('hover-left')
})

left.addEventListener('touchend', () => {
    conteiner.classList.remove('hover-left')
})


right.addEventListener('touchstart', () => {
    conteiner.classList.add('hover-right')
})

right.addEventListener('touchend', () => {
    conteiner.classList.remove('hover-right')
})