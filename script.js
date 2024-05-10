function check(){
  var input = document.getElementById("enter");
  input.addEventListener("keypress", verlauf);
  if(Event.key === "Enter"){
    Event.preventDefault();
    document.getElementById("enter").click();
  }
}

function displayValue(val) {
  document.getElementById("result").value += val;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function verlauf() {
  let z = document.getElementById("result").value;
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  let div = document.getElementById("verlauf"); 
  div.innerHTML = `<p>${z} = ${y}</p>`;
  document.body.appendChild(div)
}