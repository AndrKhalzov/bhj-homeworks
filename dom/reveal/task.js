let reveals = Array.from(document.querySelectorAll('.reveal'));
document.addEventListener('scroll', () => {
    for (let i = 0; i < reveals.length; i++) {
        let top = reveals[i].getBoundingClientRect().top;
        let bottom = reveals[i].getBoundingClientRect().bottom;

        if (top < window.innerHeight && bottom > 0) {
            reveals[i].classList.add('reveal_active');
        }
    }
})