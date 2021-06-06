const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const procentage = document.getElementById('procentage');
const remained = document.getElementById('remainded');
const cup = document.querySelector('.cup')
const cupHeight = cup.getBoundingClientRect().height


console.log(cupHeight)


const updateBigCups = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // console.log(fullCups)

    if (fullCups === 0) {
        procentage.style.visibility = 'hidden';
        procentage.style.height = 0
    } else {
        procentage.style.visibility = 'visible'
        procentage.style.height = `${fullCups / smallCups.length * cupHeight}px`
        procentage.innerText = `${fullCups / smallCups.length * 100}%`
    }

    if (fullCups === smallCups.length) {
        remained.style.visibility = 'hidden'
        // remained.style.display = 'none'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        // remained.style.display = 'block'
        procentage.style.overflow = 'hidden'

        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}



const highlightCups = (index) => {
    // console.log(index)

    if (smallCups[index].classList.contains('fill') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }

    })

    updateBigCups()
}


smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})