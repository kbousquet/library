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
    readStatus.classList.add("read-status");
    if (book.read){
      readStatus.classList.add("read");
      readStatus.innerHTML = "Read";
    } else {
      readStatus.classList.add("not-read");
      readStatus.innerHTML = "Not Read";
    }
    card.appendChild(readStatus);

    deleteBtn.addEventListener('click', function(){
      card.remove();
      let index = card.getAttribute('book-index');
      myLibrary.splice(index, 1);
  })
  
    readStatus = document.querySelectorAll(".read-status");
    readStatus.forEach(button => button.addEventListener("click", statusChange));
    
  });
}

function removeBook(e){

  let index = myLibrary.findIndex(e);
  myLibrary.splice(index, 1);
  displayBooks();
};

function statusChange(e){
  let statusbtn = document.querySelector('.read-status');
  let curr_status = e.target.textContent;

  if(curr_status === 'Read'){
      statusbtn.innerHTML = 'Not Read';
      statusbtn.classList.remove('read');
      statusbtn.classList.add('not-read');
  }
  else{
      statusbtn.innerHTML = 'Read';
      statusbtn.classList.remove('not-read');
      statusbtn.classList.add('read');
  };

};

function resetForm(){
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';
  document.getElementById("read").checked = false;
}


document.querySelector(".addBook").addEventListener('click', ()=> {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  if (title && author && pages){
    addBookToLibrary();
    displayBooks();
    resetForm();
  }
});
