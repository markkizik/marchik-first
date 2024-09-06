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


const inputChange = () => {
    block.style.boxShadow = `${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`;
};

const widthChange = () => {
    block.style.width = `${width.value}px`;
    widthNum.value = width.value;
};

const codes = document.querySelector('.card-code__codes');
const readyCode = () => {
    codes.innerHTML = `box-shadow: ${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`;
};

function copyText() {
    navigator.clipboard.writeText(`box-shadow: ${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`);
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
    element.addEventListener('input', function () {
        readyCode();
        const nearElement = element.type != 'range' ? element.nextElementSibling : element.previousElementSibling;
        // if (element.type != 'range') {
        //     setInputValue(element.nextElementSibling, element.value)
        // } else {
        //     setInputValue(element.previousElementSibling, element.value)
        // }
        setInputValue(nearElement, element.value);

        widthChange();
        inputChange();
    });
});

console.log(readyCode)