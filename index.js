const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const scrollButton = document.getElementById('scroll');

scrollButton.addEventListener('click', scrollToTop);

const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close');
const scroll = document.getElementById('scroll');


// Відкриваємо модальне вікно при кліці на кнопку
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    scroll.style.display = 'none';
});

// Закриваємо модальне вікно при кліці на кнопку закриття або на фон
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    scroll.style.display = 'flex';

});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});