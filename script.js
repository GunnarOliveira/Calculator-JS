function insertToDisplay(data) {
  document.getElementById("display").value += data;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function result() {
  const display = document.getElementById("display");
  try {
    if (display.value.length) {
      display.value = eval(display.value);
    }
  } catch {
    display.value = "ERROR ;C";
  }
}
