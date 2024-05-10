function displayValue(val) {
  document.getElementById("result").value += val;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  // displayXandY();
}

function clearResult() {
  document.getElementById("result").value = "";
}

function verlauf() {
  let z = document.getElementById("result").value;
  solve()
  let x = document.getElementById("result").value;
  let y = eval(x);
  let div = document.getElementById("verlauf"); 
  div.innerHTML = `<p>${z} = ${y}</p>`;
  document.body.appendChild(div);
}