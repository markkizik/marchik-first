const block = document.querySelector('.box-generaror__elm');
const blockSecond = document.querySelector('.box-generator__first')

const horizontal = document.querySelector('.input-horizontal');
const vertical = document.querySelector('.input-vertical');
const blurInput = document.querySelector('.input-blur');
const spread = document.querySelector('.input-spread');
const inset = document.querySelector('#input-inset');
const color = document.querySelector('#input-color');

const allInput = document.querySelectorAll('input')

const horizontalP = document.querySelector('.label-horizontal');
const verticalP = document.querySelector('.label-vertical');
const blurInputP = document.querySelector('.label-blur');
const spreadP = document.querySelector('.label-spread');
const widthP = document.querySelector('.label-width');

const width = document.querySelector('.input-width')

const inputChange = () => {
    const h = horizontal.value;
    const v = vertical.value;
    const b = blurInput.value;
    const s = spread.value;
    const c = color.value;
    const w = width.value;

    const insetCheked = inset.checked ? 'inset' : "";
    block.setAttribute("style", `box-shadow: ${insetCheked} ${h}px ${v}px ${b}px ${s}px ${c}; width: ${w}px;`);

    horizontalP.innerHTML = horizontal.value;
    verticalP.innerHTML = vertical.value;
    blurInputP.innerHTML = blurInput.value;
    spreadP.innerHTML = spread.value;
    widthP.innerHTML = width.value;
};

allInput.forEach(element => {
    element.addEventListener('click', function () {
        inputChange();
    });
});