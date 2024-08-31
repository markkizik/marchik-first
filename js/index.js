const block = document.querySelector('.box-generaror__elm');
const blockSecond = document.querySelector('.box-generator__first')

const horizontal = document.querySelector('.input-horizontal');
const vertical = document.querySelector('.input-vertical');
const blurInput = document.querySelector('.input-blur');
const spread = document.querySelector('.input-spread');
const inset = document.querySelector('#input-inset');
const color = document.querySelector('#input-color');

const allInputFirst = document.querySelectorAll('.box-generator__first input');
const allInputSecond = document.querySelectorAll('.box-generator__first .box-generato__width input')

const horizontalP = document.querySelector('.label-horizontal');
const verticalP = document.querySelector('.label-vertical');
const blurInputP = document.querySelector('.label-blur');
const spreadP = document.querySelector('.label-spread');
const widthP = document.querySelector('.label-width');

const width = document.querySelector('.input-width')

const inputChange = () => {
    block.style.boxShadow= `${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`;

    horizontalP.innerHTML = horizontal.value;
    verticalP.innerHTML = vertical.value;
    blurInputP.innerHTML = blurInput.value;
    spreadP.innerHTML = spread.value;
};

const widthChange = () => {
    block.style.width = `${width.value}px`;
    widthP.innerHTML = width.value;
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