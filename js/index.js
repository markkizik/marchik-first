const btn = document.querySelector('button')
const box = document.querySelector('.box')

btn.addEventListener("click", () => {
    box.classList.toggle('show')
});