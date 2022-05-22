
// operator.forEach( x => {
//   if( x === "="){
//     keyPad.innerHTML += `<button onclick="calcu()" >${x}</button>`;
//   }else{
//     keyPad.innerHTML += `<button onclick='displayKey("${x}")' >${x}</button>`;
//   }
// });


let displayBox = document.querySelector(".display-box");
let keyPad = document.querySelector(".Key-container");
let operator = ["+","-","*","/","=","%"]
let key = ["AC","C","%","&#xf7","7","8","9","&#xd7","4","5","6","-","1","2","3","&#x2b","0",".","="]

let fontSize = _ => {
  if(displayBox.innerText.length > "5"){
    displayBox.classList.add("font")
  }
}



let calcu = _ => { 
  let current = displayBox.innerText;
  let lastChar = current[current.length-1];

  if (operator.includes(lastChar)){
    displayBox.innerText = "Error";
  }else{
    displayBox.innerText = eval(displayBox.innerText)
  }
  
};

let filter = x => {
  let current = displayBox.innerText;
  let firstChar = current[0];
  let lastChar = current[current.length-1];

  if (current == "0" && x != "." || operator.includes(firstChar) ){
    clearAll()
  }
  if(operator.includes(lastChar) && operator.includes(x)){
    return false
  }
  return true
  
}

let displayKey = (x) => {

  if(filter(x)){
    displayBox.innerText += x
  }
  
};

let clearAll = _ => displayBox.innerText = "";
let clearLast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1);


for(i=0;i<key.length;i++){
  if(key[i] === "AC"){
    keyPad.innerHTML += `<div onclick="clearAll()">${key[i]}</div>`;
  }else if (key[i] === "C"){
    keyPad.innerHTML += `<div onclick="clearLast()">${key[i]}</div>`;
  }else if (key[i] === "="){
    keyPad.innerHTML += `<div onclick="calcu()">${key[i]}</div>`;
  }else if (key[i] == "&#xd7"){
    keyPad.innerHTML += `<div onclick='displayKey("*")'>${key[i]}</div>`;
  }else if (key[i] == "&#xf7"){
    keyPad.innerHTML += `<div onclick='displayKey("/")'>${key[i]}</div>`;
  }else{
    keyPad.innerHTML += `<div onclick="displayKey('${key[i]}')">${key[i]}</div>`
  }
  
}






