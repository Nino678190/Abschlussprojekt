document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById("result");
  if (input) {
    // Ensure the element is focusable
    input.setAttribute("tabindex", "0"); // Make it focusable

    input.addEventListener("keydown", function(event) {
      if(event.key === "Enter"){
        event.preventDefault(); // Prevent the default action to ensure form submission doesn't occur
        verlauf(); // Call the function you want to execute when Enter is pressed
      }
    });
  } else {
    console.error('Input field with id "result" not found.');
  }
});

function displayValue(val) {
  document.getElementById("result").value += val;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function verlauf() {
  const z = document.getElementById("result").value;
  const y = eval(z);
  document.getElementById("result").value = y;
  const div = document.createElement("div"); 
  const leer = document.createElement("div");
  div.className = "verlauf";
  div.innerHTML = `<p>${z} = ${y}</p>`;
  document.body.appendChild(div);
  document.body.appendChild(leer);
}
