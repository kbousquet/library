let myLibrary = [];
let main = document.getElementById("main");


document.querySelector(".add-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){}
}


function addBookToLibrary(){
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = "";
  if (document.getElementById("read").checked){
    read = "yes";
  } else{
    read = "no"
  }
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}


function displayBooks(){
  const cards = document.querySelectorAll('.card');
  cards.forEach(card =>{
    card.remove();
  })
  let length = myLibrary.length; 
  for(i=0;i<length;i++){
      let card = document.createElement("div");
      card.classList.add("card");
      main.appendChild(card);
    }
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