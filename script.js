// dummy content for testing
const myLibrary = [
  {
    title: "The Da Vinci Code",
    author: "Brown, Dan",
    pages: 300,
    read: false,
  },
  {
    title: "The Da Vinci Code 2",
    author: "Brown, Dan",
    pages: 400,
    read: true,
  },
  {
    title: "The Da Vinci Code 3",
    author: "Brown, Dan",
    pages: 500,
    read: false,
  },
  {
    title: "The Da Vinci Code 4",
    author: "Brown, Dan",
    pages: 600,
    read: true,
  },
];

function Book() {
  // the constructor...
  this.title = undefined;
  this.author = undefined;
  this.pages = undefined;
  this.read = undefined;

  this.createCard = () => {
    // create book card
    const container = document.querySelector("#container");
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const author = document.createElement("h2");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const delBtn = document.createElement("button");
    card.classList.add("card");
    title.textContent = this.title;
    author.textContent = this.author;
    pages.textContent = this.pages;
    read.textContent = this.read;
    delBtn.textContent = "Delete";
    delBtn.setAttribute("type", "button");
    delBtn.addEventListener("click", () => {
      // add delete on click
      const index = myLibrary.indexOf(this);
      myLibrary.splice(index, 1);
      card.remove();
    });
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(delBtn);
  };

  this.addBookToLibrary = () => {
    // add new book to the library and call create card
    myLibrary.push(this);
    this.createCard();
  };
}

// Add new book function
const addBtn = document.getElementById("add");
addBtn.addEventListener(
  "click",
  (e) => {
    // get data from form, empty the form fields
    // check title in library and calls add book function if does not exist
    e.preventDefault();
    const form = document.getElementById("form");
    const newTitle = form.title.value;
    const newAuthor = form.author.value;
    const newPages = form.pages.value;
    if (!newTitle || !newAuthor || !newPages) {
      alert("Fill all fields please");
    } else {
      const result = myLibrary.filter((check) => check.title === newTitle);
      if (result.length === 0) {
        form.title.value = "";
        form.author.value = "";
        form.pages.value = "";
        const newBook = new Book();
        newBook.title = newTitle;
        newBook.author = newAuthor;
        newBook.pages = newPages;
        newBook.read = true;
        newBook.addBookToLibrary();
      } else {
        alert("Book already in the library");
      }
    }
  },
  false
);

// Create cards for books already in the library
myLibrary.forEach((book) => {
  const newBook = new Book(book);
  newBook.title = book.title;
  newBook.author = book.author;
  newBook.pages = book.pages;
  newBook.read = book.read;
  newBook.createCard();
  console.log(newBook);
});
