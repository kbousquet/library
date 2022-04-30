let myLibrary = [];
let main = document.getElementById("main");


document.querySelector(".add-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});

// Book constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Construct book objects
function addBookToLibrary(){
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read;
  if (document.getElementById("read").checked){
    read = "yes";
  } else{
    read = "no";
  }
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}


// Construct cards for each book object
function displayBooks(){
  const cards = document.querySelectorAll('.card');
  cards.forEach(card =>{
    card.remove();
  })
  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");
    main.appendChild(card);
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    card.appendChild(deleteBtn);
    let deleteImg = document.createElement("img");
    deleteImg.src="delete.svg";
    deleteBtn.appendChild(deleteImg);
    let bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    card.appendChild(bookInfo);
    let title = document.createElement("p");
    title.classList.add("title");
    card.appendChild(title);
    title.innerText = book.title;
    let author = document.createElement("p");
    title.classList.add("author");
    card.appendChild(author);
    author.innerText = 'By ' + book.author;
    let pages = document.createElement("p");
    title.classList.add("pages");
    card.appendChild(pages);
    pages.innerText = book.pages + ' Pages';
    let readStatus = document.createElement("button");
    if (book.read === "yes"){
      readStatus.classList.add("read");
      readStatus.innerText = "Read";
    } else {
      readStatus.classList.add("not-read");
      readStatus.innerText = "Not Read";
    }
    card.appendChild(readStatus);

  });
}


function resetForm(){
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';
  document.getElementById("read").checked = false;
}


document.querySelector(".addBook").addEventListener('click', ()=> {
  addBookToLibrary();
  displayBooks();
  resetForm();
});