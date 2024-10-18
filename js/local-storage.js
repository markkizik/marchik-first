const inputName = document.querySelector('.local-storage__name');
const inputDate = document.querySelector('.local-storage__date');
const btnSend = document.querySelector('.add-stor');
const btnAll = document.querySelector('.add-all');
const clearStore = document.querySelector('.clear-store');
const text = document.querySelector('.text');

btnSend.addEventListener('click', () => {
    const key = inputName.value;
    const val = inputDate.value

    localStorage.setItem(key, val);
});

btnAll.addEventListener('click', () => {
    text.classList.add('--content')
    for (let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        text.innerHTML += localStorage.key(i) + ': ' + localStorage.getItem(key) + '<br>';
    }
});

clearStore.addEventListener('click', () => {
    localStorage.clear()
    text.classList.remove('--content')
});