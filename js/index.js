const block = document.querySelector('.box-generaror__elm');
let boxShadow;

const shadowUpdate = () => {
    const codes = document.querySelector('.card-code__codes');
    const horizontal = document.querySelector('.input-horizontal');
    const vertical = document.querySelector('.input-vertical');
    const blurInput = document.querySelector('.input-blur');
    const spread = document.querySelector('.input-spread');
    const inset = document.querySelector('#input-inset');
    const color = document.querySelector('#input-color');
    const shadow = `${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${color.value}`;

    block.style.boxShadow = shadow;
    boxShadow = `box-shadow: ${shadow}`;
    codes.innerHTML = boxShadow;
};

const widthChange = () => {
    const width = document.querySelector('.input-width');
    block.style.width = `${width.value}px`;
};

function copyText() {
    (!boxShadow) && shadowUpdate();
    navigator.clipboard.writeText(boxShadow);
};

const setInputValue = (elm, value) => {
    elm.value = value
};

const initInputs = () => {
    const allInput = document.querySelectorAll('input');

    allInput.forEach(element => {
        element.addEventListener('input', function () {
            const nearElement = element.type != 'range' ? element.nextElementSibling : element.previousElementSibling;
    
            const isCheckMin = parseInt(element.value) < parseInt(element.min);
            const isCheckMax = parseInt(element.value) > parseInt(element.max);
            const isCheckWidth = !element.classList.contains('number-width');
    
            setInputValue(nearElement, element.value);
    
            if (isCheckMin && isCheckWidth) {
                element.value = element.min;
            }
    
            if (isCheckMax) {
                element.value = element.max;
            }
    
            widthChange();
            shadowUpdate();
        });
    
        element.addEventListener('change', () => {
            if (!element.value) {
                element.value = element.getAttribute('value')
            }
        });
    });
};

const app = () => {
    initInputs();
    shadowUpdate();
}

window.addEventListener('DOMContentLoaded', () => {
    app()
    console.log('✅ Loaded Page');
  });