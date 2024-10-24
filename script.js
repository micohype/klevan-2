// Додаємо плавну зміну фону на прокрутці
window.addEventListener('scroll', function() {
    const infoSection = document.querySelector('.info');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        infoSection.style.backgroundColor = '#f0f0f0';
    } else {
        infoSection.style.backgroundColor = '#fff';
    }
});
