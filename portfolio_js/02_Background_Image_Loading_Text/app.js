const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const btn = document.querySelector('.btn')

let load = 0

const blurring = () => {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    // console.log(load)
    loadText.textContent = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    btn.style.opacity = (scale(load, 0, 100, 0, 1))


}

const int = setInterval(blurring, 30)



const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers