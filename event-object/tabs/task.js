const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((elem, index) => {
    elem.addEventListener('click', function() {
        tabs.forEach(t => {
            t.classList.remove('tab_active');
        }) 
        elem.classList.add('tab_active');
        tabsContent.forEach(content => {
            content.classList.remove('tab__content_active');
        })
        tabsContent[index].classList.add('tab__content_active');
    })
})



