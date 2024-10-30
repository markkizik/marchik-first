// const inputName = document.querySelector('.local-storage__name');
// const inputDate = document.querySelector('.local-storage__date');
// const btnSend = document.querySelector('.add-store');
// const clearStore = document.querySelector('.clear-store');
// const text = document.querySelector('.local-storage__item');

// function BtnStorageKey(key, val) {
//     const storageKey = `<button class="clear-store --small" data-key="${key}">${val}</button>`;
//     text.insertAdjacentHTML("beforeend", storageKey);
//     return document.querySelector([data-key="${key}"])
// };

// function removeStorageKey(name) {
//     localStorage.removeItem(name);
// };

// function CreateRemoveButton(nameValue, dateValue) {
//     const storageKeys = BtnStorageKey(nameValue, dateValue);

//     storageKeys.addEventListener('click', () => {
//         removeStorageKey(nameValue);
//         storageKeys.remove();
//     })
// };

// function allStorages() {
//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let val = localStorage.getItem(key);

//         CreateRemoveButton(key, val);
//     }
// };

// btnSend.addEventListener('click', () => {
//     const key = inputName.value;
//     const val = inputDate.value;

//     if (!key || !val) return
//     localStorage.setItem(key, val);
//     CreateRemoveButton(key, val);
// });

// document.addEventListener("DOMContentLoaded", () => {
//     console.log('✅');
//     allStorages();
// });

// clearStore.addEventListener('click', () => {
//     const allButtons = document.querySelectorAll('.clear-store.--small');
//     localStorage.clear();

//     allButtons.forEach(element => {
//         element.remove()
//     });
// });

const inputName = document.querySelector('.local-storage__name');
const inputDate = document.querySelector('.local-storage__date');
const btnSend = document.querySelector('.add-store');
const clearStore = document.querySelector('.clear-store');
const text = document.querySelector('.local-storage__item');

function createStorageButton(key, val) {
    const buttonHTML = document.createElement("button");
    buttonHTML.classList.add("clear-store", "--small");
    buttonHTML.setAttribute("data-key", key);
    const contentText = document.createTextNode(val);
    buttonHTML.appendChild(contentText)
    text.appendChild(buttonHTML)

    // const button = document.querySelector(`[data-key="${key}"]`);

    buttonHTML.addEventListener('click', () => {
        localStorage.removeItem(key);
        buttonHTML.remove();
    });
}

function initializeStoredItems() {
    Object.keys(localStorage).forEach(key => {
        createStorageButton(key, localStorage.getItem(key));
    });
}

btnSend.addEventListener('click', () => {
    const key = inputName.value.trim();
    const val = inputDate.value.trim();

    if (key && val) {
        localStorage.setItem(key, val);
        createStorageButton(key, val);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    initializeStoredItems();
    console.log('✅');
});

clearStore.addEventListener('click', () => {
    localStorage.clear();
    document.querySelectorAll('.clear-store.--small').forEach(btn => btn.remove());
});