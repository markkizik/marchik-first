const block = document.querySelector('.box-generaror__elm');
const blockSecond = document.querySelector('.box-generator__first')

const allInput = document.querySelectorAll('input');
const allInputFirst = document.querySelectorAll('.box-generator__first input');
const allInputSecond = document.querySelectorAll('.box-generator__first .box-generato__width input')

const horizontal = document.querySelector('.input-horizontal');
const vertical = document.querySelector('.input-vertical');
const blurInput = document.querySelector('.input-blur');
const spread = document.querySelector('.input-spread');
const inset = document.querySelector('#input-inset');
const color = document.querySelector('#input-color');

const horizontalNum = document.querySelector('.number-horizontal');
const verticalNum = document.querySelector('.number-vertical');
const blurInputNum = document.querySelector('.number-blur');
const spreadNum = document.querySelector('.number-spread');
const widthNum = document.querySelector('.number-width');

const width = document.querySelector('.input-width');

let bxs;

const inputChange = () => {
    bxs =`${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`
    block.style.boxShadow = bxs;

    horizontalNum.value = horizontal.value;
    verticalNum.value = vertical.value;
    blurInputNum.value = blurInput.value;
    spreadNum.value = spread.value;
};

const widthChange = () => {
    block.style.width = `${width.value}px`;
    widthNum.value = width.value;
};

const codes = document.querySelector('.card-code__codes');
const readyCode = () => {
    codes.textContent = `box-shadow: ${bxs}`;
};

function copyText() {
    navigator.clipboard.writeText(`box-shadow: ${bxs}`);
    alert('Текст скопирован.');
};

// allInputFirst.forEach(element => {
//     element.addEventListener('change', function () {
//         inputChange();
//         readyCode();
//     });
// });

// allInputSecond.forEach(element => {
//     element.addEventListener('change', function () {
//         widthChange();
//     });
// });

const setInputValue = (elm, value) => {
    elm.value = value
};

allInput.forEach(element => {
    element.addEventListener('change', function () {
        readyCode();
        const nearElement = element.type != 'range' ? element.nextElementSibling : element.previousElementSibling;

        // if (element.type != 'range') {
        //     setInputValue(element.nextElementSibling, element.value)
        // } else {
        //     setInputValue(element.previousElementSibling, element.value)
        // }
        
        setInputValue(nearElement, element.value);

        inputChange();
        widthChange();
    });
});

console.log(readyCode)