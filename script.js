// Додавання плавних переходів між секціями
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transition = "opacity 0.8s ease-out";
    });

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
            }
        });
    });
});
