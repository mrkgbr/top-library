const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  myLibrary.push(new Book(title, author, pages, read));
}

function createBookCard() {
  // do stuff here
  const container = document.querySelector("#container");
  const content = document.createElement("div");
  const title = document.createElement("h1");
  content.classList.add("content");
  title.textContent = "This is the title!";
  container.appendChild(content);
  content.appendChild(title);
}

addBookToLibrary("The Da Vinci Code", "Brown, Dan", 654, false);
addBookToLibrary("The Da Vinci Code 2", "Brown, Dan", 654, false);
addBookToLibrary("The Da Vinci Code 3", "Brown, Dan", 654, false);

myLibrary.forEach((item) => {
  console.log(item);
});

console.log(myLibrary[0].title);

createBookCard();
createBookCard();
