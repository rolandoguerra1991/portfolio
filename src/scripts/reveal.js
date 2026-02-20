function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 80;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('reveal--active');
        }
    });
}

window.addEventListener('scroll', reveal);
document.addEventListener('DOMContentLoaded', () => setTimeout(reveal, 100));
