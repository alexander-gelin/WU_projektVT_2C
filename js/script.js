const nav = document.querySelector('.burgerlinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    nav.classList.toggle('burgeractive')
    burger.classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', toggleMeny)