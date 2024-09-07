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

const codes = document.querySelector('.card-code__codes');

let boxShadow;

const shadowUpdate = () => {
    const shadow = `${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`;

    block.style.boxShadow = shadow;
    boxShadow = `box-shadow: ${shadow}`;
    codes.innerHTML = boxShadow;
};

shadowUpdate();

const widthChange = () => {
    block.style.width = `${width.value}px`;
};

function copyText() {
    (!boxShadow) && shadowUpdate();
    navigator.clipboard.writeText(boxShadow);
};

const setInputValue = (elm, value) => {
    elm.value = value
};

allInput.forEach(element => {
    element.addEventListener('input', function () {
        const nearElement = element.type != 'range' ? element.nextElementSibling : element.previousElementSibling;
        setInputValue(nearElement, element.value);

        if (parseInt(element.value) < parseInt(element.min)) {
            element.value = element.min;
        }

        if (parseInt(element.value) > parseInt(element.max)) {
            element.value = element.max;
        }

        setTimeout(
            () => {
                widthChange();
                shadowUpdate();
            }, 300
        );
    });
});