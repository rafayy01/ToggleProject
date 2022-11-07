function Book(authors, language, subject, title) {
    this.authors = authors;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.isFavorite = false;
    this.comments = '';
  
    //returns a list item representing this Book ------------------------------------------------------------------------
    this.render = function () {
      //this is for adding the title to each book
      const li = document.createElement("li");
      li.textContent = this.title;

      const h4 = document.createElement("h4");
      h4.textContent = this.author;
      li.append(h4);
      //creates a favorite button ------------------------------------------------------------------------
      const favButton = document.createElement("button");
      favButton.textContent = this.isFavorite ? "❤️" : "♡";
      li.append(favButton);
  
      //toggle favorite property on click ------------------------------------------------------------------------
      favButton.addEventListener("click", () => {
        this.isFavorite = !this.isFavorite;
        favButton.textContent = this.isFavorite ? "❤️" : "♡";
      });
      
      //creating comment box ------------------------------------------------------------------------
      const input = document.createElement("input");
      input.classList.add("hidden");
      input.setAttribute("maxlength",280);
        //toggle comment button
      const showCommentButton = document.createElement("button"); 
        //
      const addCommentButton = document.createElement("button"); 
        //keeps the submit button, aka toggle button hidden until
      addCommentButton.classList.add("hidden");
        //what the buttons will display on them
      addCommentButton.innerHTML = "Add Comment";
      showCommentButton.innerHTML ="Toggle Comment Form";

      li.appendChild(input);
      li.appendChild(addCommentButton);
      li.appendChild(showCommentButton);
      
      showCommentButton.addEventListener("click", ()=>{
        if (input.style.display === "none" && addCommentButton.style.display=="none") {
          input.style.display = "block";
          addCommentButton.style.display = "block";

        } else {
          input.style.display = "none";
          addCommentButton.style.display = "none";

        }
      })
    
      addCommentButton.addEventListener("click",()=>{
        addComment(this,input.value, input);
      })
    
      return li;
    };
  }

//  function toggleComment(addCommentButton, input){
//   console.log("toggle");
//   addCommentButton.classList.toggle("hidden");
//   input.classList.toggle("hidden");
//  }

//  //this pushes the comment to be in the array ------------------------------------------------------------------------
// function addComment(book, value, input){
//   book.comments.push(value); 
//   input.value = "";
//   console.log(book);
//  }