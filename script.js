function check(){
  const input = document.getElementById("enter");
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
  const z = document.getElementById("result").value;
  const x = document.getElementById("result").value;
  const y = eval(x);
  document.getElementById("result").value = y;
  const div = document.createElement("div"); 
  const leer = document.createElement("div");
  div.className = "verlauf";
  div.innerHTML = `<p>${z} = ${y}</p>`;
  document.body.appendChild(div);
  document.body.appendChild(leer);
}

