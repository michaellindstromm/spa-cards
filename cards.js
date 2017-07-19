let writingArea = document.getElementById("writingArea");
let createButton = document.getElementById("createButton");
let putHere = document.getElementById("putHere");
let index = 1

function makeCard() {
  let newDiv = document.createElement("div");
  newDiv.className = "cardOutput";
  document.getElementById("putHere").appendChild(newDiv);

  let newDButton = document.createElement("button");
  newDButton.className = "delete button";
  newDButton.innerHTML = "DELTE";
  newDiv.appendChild(newDButton);

  let newBackColor = document.createElement("input");
  newBackColor.type = "color";
  newBackColor.className = "button"
  newDiv.appendChild(newBackColor);

  let newFontColor = document.createElement("input");
  newFontColor.type = "color";
  newFontColor.className = "button"
  newDiv.appendChild(newFontColor);

  let pNode = document.createElement("P");
  let writing = document.createTextNode(writingArea.value);
  pNode.appendChild(writing);
  newDiv.appendChild(pNode);

  function deleteCard(){
    putHere.removeChild(newDiv)
  }

  function changeBackColor() {
    newDiv.style.backgroundColor = newBackColor.value;
  }

  function changeFontColor() {
    pNode.style.color = newFontColor.value;
  }

  function changeButtonColor() {
    newDButton.style.backgroundColor = "blue";
  }
  index += 1;


  newBackColor.addEventListener("input", changeBackColor)
  newFontColor.addEventListener("input", changeFontColor)
  newDButton.addEventListener("click", deleteCard)
}


createButton.addEventListener("click", makeCard)
