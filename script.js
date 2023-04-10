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

class Book {
  // the constructor...
  constructor() {
    this.title = undefined;
    this.author = undefined;
    this.pages = undefined;
    this.read = undefined;
  }

  createCard() {
    // create book card
    // elements
    const container = document.querySelector("#container");
    const card = document.createElement("div");
    container.appendChild(card);
    card.classList.add("card");

    const titleLabel = document.createElement("h2");
    titleLabel.textContent = "Book title:";
    card.appendChild(titleLabel);

    const title = document.createElement("h1");
    title.textContent = this.title;
    card.appendChild(title);

    const authorLabel = document.createElement("h2");
    authorLabel.textContent = "Author:";
    card.appendChild(authorLabel);

    const author = document.createElement("h1");
    author.textContent = this.author;
    card.appendChild(author);

    const pagesLabel = document.createElement("h2");
    pagesLabel.textContent = "Number of pages:";
    card.appendChild(pagesLabel);

    const pages = document.createElement("p");
    pages.textContent = this.pages;
    card.appendChild(pages);

    const readLabel = document.createElement("h2");
    readLabel.textContent = "Have you read it?";
    card.appendChild(readLabel);

    const readCheckbox = document.createElement("input");
    card.appendChild(readCheckbox);

    const delBtn = document.createElement("button");
    delBtn.setAttribute("type", "button");
    delBtn.textContent = "Delete";
    card.appendChild(delBtn);

    readCheckbox.setAttribute("type", "checkbox");
    if (this.read === "Yes") {
      readCheckbox.checked = true;
      card.classList.add("checked");
    }

    // searching for index by title
    const checkIndex = () => {
      for (let i = 0; i < myLibrary.length; i += 1) {
        if (myLibrary[i].title === this.title) {
          return i;
        }
      }
      return false;
    };

    // delete function
    delBtn.addEventListener("click", () => {
      // add delete on click
      const index = checkIndex();
      myLibrary.splice(index, 1);
      console.log(index);
      card.remove();
    });

    // read switch function
    readCheckbox.addEventListener("change", () => {
      const index = checkIndex();
      if (readCheckbox.checked) {
        myLibrary[index].read = "Yes";
        card.classList.toggle("checked");
      } else {
        myLibrary[index].read = "No";
        card.classList.toggle("checked");
      }
    });
  }
  addBookToLibrary() {
    // add new book to the library and call create card
    myLibrary.push(this);
    this.createCard();
  }
}

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
