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

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBookCard(book) {
  // create book card
  const container = document.querySelector("#container");
  const card = document.createElement("div");
  const title = document.createElement("h1");
  const author = document.createElement("h2");
  const pages = document.createElement("p");
  const read = document.createElement("p");
  const delBtn = document.createElement("button");
  card.classList.add("card");
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;
  delBtn.textContent = "Delete";
  delBtn.setAttribute("type", "button");
  delBtn.addEventListener("click", () => {
    // add delete on click
    const index = myLibrary.indexOf(book);
    console.log(index);
    myLibrary.splice(index, 1);
    card.remove();
  });
  container.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(delBtn);
}

function addBookToLibrary(title, author, pages, read) {
  // add new book to the library and call create card
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
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
    form.title.value = "";
    const newAuthor = form.author.value;
    form.author.value = "";
    const newPages = form.pages.value;
    form.pages.value = "";

    const result = myLibrary.filter((check) => check.title === newTitle);
    if (result.length === 0) {
      addBookToLibrary(newTitle, newAuthor, newPages, true);
    } else {
      alert("Book already in the library");
    }
  },
  false
);

// Create cards for books already in the library
myLibrary.forEach((book) => {
  createBookCard(book);
});
