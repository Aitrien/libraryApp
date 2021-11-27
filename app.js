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
    this.read = false;
  }
  else {
    this.read = true;
  }
  let newStatus = this.read ? "Read" : "Unread";
  return newStatus
}


function addBookToLibrary(book) {
  myLibrary.push(book);
  addBookDisplay(book);
}

function processBookForm() {
  console.log("submitted");
}

document.getElementById("form-submit").addEventListener("click", function(event){
  // blocks form refreshing page
  event.preventDefault();
  title = document.getElementById("form-title").value
  author = document.getElementById("form-author").value
  pages = document.getElementById("form-pages").value
  read = document.getElementById("form-read").value
  // VALIDATE
  newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  //addBookToLibrary();
  console.log("submit");
});

// container to hold book elements
wrapper = document.getElementById("wrapper");
let uniqueID = 0;

function addBookDisplay(book) {
  // data-key to be added to buttons: "title-author"
  book.id = uniqueID;
  let bookContainer = document.createElement("article");
  bookContainer.classList.add("book");

  let readButton = document.createElement("button");
  readButton.textContent = book.read ? "Read" : "Unread";
  readButton.classList.add("toggle-read");
  readButton.addEventListener('click', function(e) {
    readButton.textContent = book.toggleRead();
  });

  bookContainer.appendChild(readButton);

  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-book");
  removeButton.setAttribute("data-key", `${ uniqueID }`);
  removeButton.addEventListener('click', function(e) {
    // remove book display
    bookContainer.parentNode.removeChild(bookContainer);
    // remove from myLibrary
    console.log()
    myLibrary.forEach(savedBook => {
      if (savedBook["id"] === Number(removeButton.getAttribute("data-key"))) {
        console.log("found " + savedBook.title);
        let index = myLibrary.indexOf(savedBook);
        myLibrary.splice(index, 1);
      }
    });
  });
  bookContainer.appendChild(removeButton);

  let pTitle = document.createElement("p");
  let titleStrong = document.createElement("strong");
  titleStrong.textContent = book.title;
  pTitle.appendChild(titleStrong);
  bookContainer.appendChild(pTitle);

  let pAuthor = document.createElement("p");
  pAuthor.textContent = book.author;
  bookContainer.appendChild(pAuthor);

  uniqueID += 1;
  wrapper.appendChild(bookContainer);
}

let hobbit = new Book("The Hobbit", "J.R.R. Tokien", 295, false);
let hungry = new Book("The Hungry Caterpillar", "Eric Carle", 26, true);
let harry = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 400, true);
let dune = new Book("Dune", "Frank Herbert", 896, false);
let python = new Book("Automate the Boring Stuff with Python", "Al Sweigart", 592, false);
addBookToLibrary(hobbit);
addBookToLibrary(hungry);
addBookToLibrary(harry);
addBookToLibrary(dune);
addBookToLibrary(python);

function updateDisplay() {
  // called when a change has happened to the myLibrary array
  // remove all child nodes inside #wrapper
  // begin by clearing wrapper
  while (wrapper.hasChildNodes()) {
    wrapper.removeChild(wrapper.lastChild);
  }

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