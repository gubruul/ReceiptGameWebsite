const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(tab).classList.add('active');
    });
});
