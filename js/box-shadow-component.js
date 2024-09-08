export const boxShadowComponent = () => {

    const getElement = (name) => {
        return document.querySelector(name)
    };

    const block = getElement('.box-generaror__elm');
    let boxShadow;

    const hexToRgba = (hex) => {
        // Удаление решетки, если есть
        hex = hex.replace(/^#/, '');

        let alpha = getElement('.input-opacity').value;

        // Преобразование в целые числа
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const shadowUpdate = () => {
        const codes = getElement('.card-code__codes');
        const horizontal = getElement('.input-horizontal');
        const vertical = getElement('.input-vertical');
        const blurInput = getElement('.input-blur');
        const spread = getElement('.input-spread');
        const inset = getElement('#input-inset');
        const color = getElement('#input-color');

        const hex = color.value;
        const rgba = hexToRgba(hex);

        const shadow = `${inset.checked ? 'inset' : ""} ${horizontal.value}px ${vertical.value}px ${blurInput.value}px ${spread.value}px ${rgba}`;

        block.style.boxShadow = shadow;
        boxShadow = `box-shadow: ${shadow}`;
        codes.innerHTML = boxShadow;
    };

    const widthChange = () => {
        const width = getElement('.input-width');
        block.style.width = `${width.value}px`;
    };

    const buttonCopy = getElement('.copy-button')
    buttonCopy.addEventListener('click', () => {
        (!boxShadow) && shadowUpdate();
        navigator.clipboard.writeText(boxShadow);
    });

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

    initInputs();
    shadowUpdate();
}