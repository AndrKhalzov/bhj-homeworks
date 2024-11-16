/* 
при нажатии на менюшку - открывается доп список - запрещается переход по ссылке - менюшка закрывается при открытии другой

цикл на общее меню --- событие клик на каждый элемент меню --- убрать поведение дефолт ссылок

классы нужно сносить каждый раз при нажатии - и добавлять - не циклом, а каждый отдельно и не индексом - хуета выйдет 
по навигации - найти соседа nextElementSibling - нужен сосед главного меню - каждоый линкс --- это след. элемент - необхоимо добавить класс если есть класс нужный 
ошибка при нажатии на класс где нет доп списка - проверка класса
*/

let menuLinks = Array.from(document.querySelectorAll('.menu__link'));
let menu = Array.from(document.querySelectorAll('.menu_sub'));

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        menu.forEach((item) => {
            item.classList.remove('menu_active');
        })
        let nextItem = link.nextElementSibling;
        if (nextItem && nextItem.classList.contains('menu_sub')) {
            nextItem.classList.add('menu_active');
        }
    })
})