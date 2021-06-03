const smallCups = document.querySelectorAll('.cup-small');
const litesrs = document.getElementById('liters');
const procentage = document.getElementById('procentage');
const remained = document.getElementById('remainded');


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
}


smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})