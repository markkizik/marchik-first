import { boxShadowComponent } from "./box-shadow-component.js"

const app = () => {
    boxShadowComponent();
}

window.addEventListener('DOMContentLoaded', () => {
    app()
    console.log('✅ Loaded Page');
});