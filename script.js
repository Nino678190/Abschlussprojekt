function displayValue(val) {
  document.getElementById("result").value += val;
}

// evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

// clear the result
function clearResult() {
  document.getElementById("result").value = "";
}
