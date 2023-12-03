/* Setting theme change */
function setColorTheme(theme) {
    const root = document.documentElement;
    root.className = theme;

    const toggle = document.getElementById('slider');
    toggle.className = theme;
}

/* Checking system theme preference on load */
window.onload = function () {
    let newTheme = 'light';
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        newTheme = 'dark';
    }
    setColorTheme(newTheme);
};

/* Checking changes in prefered theme */
const setColorScheme = e => {
    let newTheme = 'light';
    if (e.matches) {
        newTheme = 'dark';
    }
    setColorTheme(newTheme);
}


/* Setting theme change on toggle switch */
function setToggleTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    setColorTheme(newTheme);
}

/* Checking system preference on change and passes it's state to the listener */
const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener('change', setColorScheme);

function openmenu() {
    var side = document.getElementById("pop-up");
    side.className = side.className === "pop-up hidden" ? "pop-up show" : "pop-up hidden";
}

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        str = this.title + " by " + this.author + ", " + this.pages + " pages";
        if (this.read) {
            str += ", read\n";
        }
        else {
            str += ", not read yet\n";
        }
        return str;
    };
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log("Adding : ");
    console.log(book.info());
    showBooksInLibrary();
}

Book.prototype.isABook = function () {
    console.log("It's a book !");
}

function showBooksInLibrary() {
    console.log("Show Books In Library");
    const bookList = document.querySelector('#table-content');
    bookList.innerHTML = '';
    myLibrary.forEach(book => {
        const bookRow = document.createElement('div');
        bookRow.classList.add('books-info');
        bookList.appendChild(bookRow);

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-container');
        bookRow.appendChild(bookInfo);

        // BOOK TITLE
        const bookTitle = document.createElement('div');
        bookTitle.textContent = book.title;
        bookInfo.appendChild(bookTitle);
        // BOOK AUTHOR
        const bookAuthor = document.createElement('div');
        bookAuthor.textContent = book.author;
        bookInfo.appendChild(bookAuthor);
        // BOOK PAGES
        const bookPages = document.createElement('div');
        bookPages.textContent = book.pages;
        bookInfo.appendChild(bookPages);
        // BOOK STATUS BUTTON
        const bookStatus = document.createElement('div');
        const statusSymbol = document.createElement('check');
        if (!book.read) {
            statusSymbol.classList.add('fas', 'fa-times');
        } else {
            statusSymbol.classList.add('fas', 'fa-check');
        }
        bookStatus.appendChild(statusSymbol);
        bookInfo.appendChild(bookStatus);


    });
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);
window.onload = function () {
    addBookToLibrary(theHobbit.title, theHobbit.author, theHobbit.pages, theHobbit.read)

    const bookForm = document.querySelector("#book-form");
    const bookbutton = document.querySelector("#submit-btn");

    bookbutton.addEventListener('click', function (event) {
        event.preventDefault();
        const author = bookForm.elements['author'].value;
        const title = bookForm.elements['title'].value;
        const pages = bookForm.elements['pages'].value;
        const read = bookForm.elements['read'].checked;
        addBookToLibrary(author, title, pages, read);
        console.log(`New Book Added - Author: ${author}, Title: ${title}, Pages: ${pages}, Read: ${read}`);

        bookForm.reset();
        var side = document.getElementById("pop-up");
        side.className = side.className === "pop-up hidden" ? "pop-up show" : "pop-up hidden";
    });
};