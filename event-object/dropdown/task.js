document.addEventListener("DOMContentLoaded", function() {
    const dropdownValue = document.querySelector('.dropdown__value');
    const dropdownList = document.querySelector('.dropdown__list');
    const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));
    
    dropdownValue.addEventListener('click', function() {
        dropdownList.classList.toggle('dropdown__list_active');
    })
    //  нужно обойти все элементы на клик (каждое значение) - сделать событие клик им - убрать поведение ссылок - убрать список - заменить значение
    dropdownLinks.forEach(elem => {
        elem.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownList.classList.remove('dropdown__list_active');
            dropdownValue.textContent = event.currentTarget.textContent;
        })
    })
})
