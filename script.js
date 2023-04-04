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
  // do stuff here
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
    const index = myLibrary.indexOf(book);
    console.log(index);
    myLibrary.splice(index, 1);
    card.remove();
    // container.innerHTML = "";
    // myLibrary.forEach((remainingBooks) => {
    //   createBookCard(remainingBooks);
    // });
  });
  container.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(delBtn);
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
}

myLibrary.forEach((book) => {
  createBookCard(book);
});

const addBtn = document.getElementById("add");
addBtn.addEventListener(
  "click",
  () => {
    addBookToLibrary("One", "Two", 333, true);
  },
  false
);
