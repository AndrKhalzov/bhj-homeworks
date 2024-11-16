let buttons = Array.from(document.querySelectorAll('.font-size'));
 let booksContainer = document.querySelector('.book');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        buttons.forEach((b) => {
            b.classList.remove('font-size_active');
        })
        let buttonTarget = event.currentTarget;
        buttonTarget.classList.add('font-size_active');

        if (button.classList.contains('font-size_small')) {
            booksContainer.classList.add('book_fs-small');
        } else if (button.classList.contains('font-size_big')) {
            booksContainer.classList.remove('book_fs-small'); 
            booksContainer.classList.add('book_fs-big');
        } else {
            booksContainer.classList.remove('book_fs-small'); 
            booksContainer.classList.remove('book_fs-big'); 
        }
    })
})