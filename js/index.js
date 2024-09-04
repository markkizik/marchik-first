const block = document.querySelector('.box-generaror__elm');
const blockSecond = document.querySelector('.box-generator__first')

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

const width = document.querySelector('.input-width')

const inputChange = () => {
    block.style.boxShadow= `${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`;

    horizontalNum.value = horizontal.value;
    verticalNum.value = vertical.value;
    blurInputNum.value = blurInput.value;
    spreadNum.value = spread.value;
};

const widthChange = () => {
    block.style.width = `${width.value}px`;
    widthNum.value = width.value;
};

allInputFirst.forEach(element => {
    element.addEventListener('change', function () {
        inputChange();
    });
});

allInputSecond.forEach(element => {
    element.addEventListener('change', function () {
        widthChange();
    });
});