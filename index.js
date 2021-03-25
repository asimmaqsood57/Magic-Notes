console.log("This is javaScript file.");
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    
    
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");


    if (notes == null) {
      notesObj = [];
    }else {

      notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";

showNotes();
});

function showNotes() {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }else {

    notesObj = JSON.parse(notes);
  }
let html;


html = "";


notesObj.forEach(function(element, index) {
  
  html+= `
  <div class="noteCard card my-3 mx-4" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
  
  <button type="button" onclick="deleteNote(this.id)" name="" id="${index}" class="btn btn-primary" btn-lg btn-block">Delete</button>
      </div>
    </div>
  
  `;
});

let notesElm = document.getElementById("notes");
if (notesObj.length != 0) {
  notesElm.innerHTML = html;
}else {

  notesElm.innerHTML = `Nothing to show! "Add notes" button to add your notes.`;
}


}


function deleteNote(index) {

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  }else {

    notesObj = JSON.parse(notes);
  }

notesObj.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes();


}


let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){

let inputVal = search.value.toLowerCase();
let noteCards = document.getElementsByClassName("noteCard");

Array.from(noteCards).forEach(function(element){

  let cardTxt = element.getElementsByTagName("p")[0].innerText;

  if(cardTxt.includes(inputVal)){
    element.style.display = "block";
  }else {
    element.style.display = "none";
  }

});


});

