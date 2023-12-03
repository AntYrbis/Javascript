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

function addBookToLibrary() {
    book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);
    myLibrary.push(book);
}

Book.prototype.isABook = function () {
    console.log("It's a book !");
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);
theHobbit.isABook()
console.log(theHobbit.info());