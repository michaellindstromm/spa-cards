let writingArea = document.getElementById("writingArea");
let createButton = document.getElementById("createButton");
let putHere = document.getElementById("putHere");
let rand255 = Math.floor(Math.random*255);
let index = 1

function makeCard() {
  let newDiv = document.createElement("div");
  newDiv.className = "cardOutput";
  newDiv.for = "Card" + index;
  document.getElementById("putHere").appendChild(newDiv);

  let newDButton = document.createElement("button");
  newDButton.className = "delete";
  newDButton.innerHTML = "DELTE";
  newDButton.name = "Card" + index;
  newDiv.appendChild(newDButton);

  let pNode = document.createElement("P");
  let writing = document.createTextNode(writingArea.value);
  pNode.appendChild(writing);
  newDiv.appendChild(pNode);

  function deleteCard(){
    putHere.removeChild(newDiv)
  }

  index += 1;

  newDButton.addEventListener("click", deleteCard)
}


createButton.addEventListener("click", makeCard)
