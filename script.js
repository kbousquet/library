let myLibrary = [];


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
      
      if (this.read === 'yes'){
        return `${title} by ${author}, ${pages} pages, read`
      } else {
        return `${title} by ${author}, ${pages} pages, not read yet`
      }
    }
}

function addBookToLibrary(){
  num = currentSize*currentSize

  for(i=0;i<num;i++){
      let card = document.createElement("div");
      card.classList.add("card");
      canvas.appendChild(card);
    }
 
}
