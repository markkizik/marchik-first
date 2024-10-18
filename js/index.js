const body = document.body;
const checkboxTheme = document.querySelector('.checkbox__input');

const changeThemes = (name) => {
    if (name === 'light') {
        body.classList.add('--light');
        checkboxTheme.checked = true;
        localStorage.setItem('theme', 'light');
        return
    }

    body.classList.remove('--light');
    localStorage.setItem('theme', 'dark');
    checkboxTheme.checked = false;

};

function toggleTheme() {
    body.classList.toggle('--light');

    body.classList.contains('--light') ? changeThemes('light') : changeThemes('dark');
}

checkboxTheme.addEventListener('click', toggleTheme);

const showPlan = (name) => {

    const plans = document.querySelectorAll('.donate-plan-contents__items');

    if (!plans.length) return;

    plans.forEach(item => {

        (item.getAttribute('data-plan-content') === name) ? item.classList.add('--show') : item.classList.remove('--show');
    });
};

const savedPlan = () => {
    const savedPlan = localStorage.getItem('plan');

    if (savedPlan) {
        cardPlan.forEach(item => {
            if (item.dataset.plans === savedPlan) {
                item.classList.add('--selected');
            }
        });
    }
};

const donateActive = () => {
    const donate = document.querySelectorAll('.donate-plans .donate-plans__btn');

    if (!donate.length) return;

    donate.forEach((item) => {
        item.addEventListener('click', () => {
            donate.forEach(elm => elm.classList.remove('--active'));
            item.classList.add('--active');

            showPlan(item.dataset.plan);
        });
    });
};

const cardPlan = document.querySelectorAll('.donate-plan-contents__item');

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme');
    changeThemes(savedTheme);
    donateActive();
    savedPlan();

    if (!cardPlan.length) return;

    cardPlan.forEach((item) => {
        item.addEventListener('click', () => {
            cardPlan.forEach(elm => elm.classList.remove('--selected'));
            item.classList.add('--selected');
            localStorage.setItem('plan', item.dataset.plans);
        });
    });
});