let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    output = title + " by " + author + ", " + pages + " pages, ";
    output += read ? "has been read" : "not read yet";
    return output;
  }
}

// Adds toggleRead method to the Book prototype
Book.prototype.toggleRead = function () {
  if (this.read) {
    this.read = false
  }
  else {
    this.read = true
  }
  let newStatus = this.read ? "read" : "not read";
  console.log(this.title + " has been changed to " + newStatus);
}

let hobbit = new Book("The Hobbit", "J.R.R. Tokien", 295, false);
let hungry = new Book("The Hungry Caterpillar", "Eric Carle", 26, true);
let harry = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 400, true);
let dune = new Book("Dune", "Frank Herbert", 896, false);
let python = new Book("Automate the Boring Stuff with Python", "Al Sweigart", 592, false);


function addBookToLibrary() {
  // do stuff here
  // get values from form
  // 
}

function processBookForm() {
  console.log("hmmmm");
}

document.getElementById("form-submit").addEventListener("click", function(event){
  event.preventDefault();
});

function updateDisplay() {
  // called when a change has happened to the myLibrary array
  // remove all child nodes inside #wrapper
  wrapper = document.getElementById("wrapper");
}

function toggleNewBookForm() {
  // used by the new book button to show/hide the form for adding new books to the library
  const bookForm = document.querySelector(".bookform");

  if (bookForm.classList.contains("active-form")) {
    bookForm.classList.remove("active-form");
  }
  else {
    bookForm.classList.add("active-form");
  }
}