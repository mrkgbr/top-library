// dummy content for testing
const myLibrary = [
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    pages: 304,
    read: "No",
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    pages: 96,
    read: "Yes",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    pages: 223,
    read: "No",
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    pages: 272,
    read: "Yes",
  },
];

function Book() {
  // the constructor...
  this.title = undefined;
  this.author = undefined;
  this.pages = undefined;
  this.read = undefined;
}

Book.prototype.createCard = function () {
  // create book card
  // elements
  const container = document.querySelector("#container");
  const card = document.createElement("div");
  const title = document.createElement("h1");
  const author = document.createElement("h1");
  const pages = document.createElement("p");
  const readCheckbox = document.createElement("input");
  const delBtn = document.createElement("button");
  const titleLabel = document.createElement("h2");
  const authorLabel = document.createElement("h2");
  const pagesLabel = document.createElement("h2");
  const readLabel = document.createElement("h2");

  // contents
  titleLabel.textContent = "Book title:";
  authorLabel.textContent = "Author:";
  pagesLabel.textContent = "Number of pages:";
  readLabel.textContent = "Have you read it?";
  title.textContent = this.title;
  author.textContent = this.author;
  pages.textContent = this.pages;
  read.textContent = this.read;
  delBtn.textContent = "Delete";

  // properties
  card.classList.add("card");
  delBtn.setAttribute("type", "button");
  readCheckbox.setAttribute("type", "checkbox");
  if (this.read === "Yes") {
    readCheckbox.checked = true;
    card.classList.add("checked");
  }

  delBtn.addEventListener("click", () => {
    // add delete on click
    const index = myLibrary.indexOf(this);
    myLibrary.splice(index, 1);
    card.remove();
  });

  readCheckbox.addEventListener("change", () => {
    if (readCheckbox.checked) {
      this.read = "Yes";
      card.classList.toggle("checked");
    } else {
      this.read = "No";
      card.classList.toggle("checked");
    }
  });

  // append
  container.appendChild(card);
  card.appendChild(titleLabel);
  card.appendChild(title);
  card.appendChild(authorLabel);
  card.appendChild(author);
  card.appendChild(pagesLabel);
  card.appendChild(pages);
  card.appendChild(readLabel);
  card.appendChild(readCheckbox);
  card.appendChild(delBtn);
};

Book.prototype.addBookToLibrary = function () {
  // add new book to the library and call create card
  myLibrary.push(this);
  this.createCard();
};

// Add new book function
const addBtn = document.getElementById("add");
addBtn.addEventListener(
  "click",
  (e) => {
    // get data from form, empty the form fields
    // check title in library and calls add book function if does not exist
    const formData = document.getElementById("form");
    const newTitle = formData.title.value;
    const newAuthor = formData.author.value;
    const newPages = formData.pages.value;
    const newRead = formData.read.value;
    if (!newTitle || !newAuthor || !newPages) {
      return;
    }
    e.preventDefault();
    const result = myLibrary.filter((check) => check.title === newTitle);
    if (result.length === 0) {
      formData.title.value = "";
      formData.author.value = "";
      formData.pages.value = "";
      const newBook = new Book();
      newBook.title = newTitle;
      newBook.author = newAuthor;
      newBook.pages = newPages;
      newBook.read = newRead;
      newBook.addBookToLibrary();
    } else {
      alert("Book already in the library");
    }
  },
  false
);

// Create cards for books already in the library on page load
myLibrary.forEach((book) => {
  const newBook = new Book(book);
  newBook.title = book.title;
  newBook.author = book.author;
  newBook.pages = book.pages;
  newBook.read = book.read;
  newBook.createCard();
});
