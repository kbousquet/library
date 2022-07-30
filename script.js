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
    read = true;
  } else{
    read = false;
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
  myLibrary.forEach((book, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('book-index', index);
    main.appendChild(card);
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    card.appendChild(deleteBtn);
    let deleteImg = document.createElement("img");
    deleteImg.src="img/delete.svg";
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
    readStatus.classList.add("read-status");
    if (book.read){
      readStatus.classList.remove('not-read');
      readStatus.classList.add("read");
      readStatus.innerHTML = "Read";
    } else {
      readStatus.classList.remove('read');
      readStatus.classList.add("not-read");
      readStatus.innerHTML = "Not Read";
    }
    card.appendChild(readStatus);

    deleteBtn.addEventListener('click', function(){
      card.remove();
      let index = card.getAttribute('book-index');
      myLibrary.splice(index, 1);
    })

    readStatus.addEventListener("click", function(){
      console.log("click")
      if (book.read === true){
        book.read = false;
      }
      else {
        book.read = true;
      }
      displayBooks();
    });
  });
}

function resetForm(){
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';
  document.getElementById("read").checked = false;
}


document.querySelector(".addBook").addEventListener('click', (e)=> {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  if (title && author && pages){
    addBookToLibrary();
    displayBooks();
    resetForm();
  } else {
    alert('Please fill out all fields');
  }
});
