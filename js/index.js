const main = document.querySelector('.timing');
const btnStart = document.querySelector('.timing-start');

btnStart.addEventListener('click', function() {
    main.classList.toggle('--start');
});