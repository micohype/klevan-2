// Плавне з'явлення контенту під час скролінгу
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const showSection = (section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    };

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        showSection(section);
    });

    window.addEventListener("scroll", () => {
        sections.forEach(showSection);
    });
});
