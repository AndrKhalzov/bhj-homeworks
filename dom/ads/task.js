let rotator = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

let funcTimer = setInterval(() => {
    rotator[index].classList.remove('rotator__case_active');
    index = (index + 1) % rotator.length;
    rotator[index].classList.add('rotator__case_active');
}, 1000)

