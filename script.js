window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    result();
  } else if (event.key === "Delete") {
    event.preventDefault();
    clearDisplay();
  } else if (event.key === "Backspace") {
    event.preventDefault();
    backspace();
  } else if (/^[0-9+\-*/.]$/.test(event.key)) {
    event.preventDefault();
    insertToDisplay(event.key);
  }
});
function alternateTheme() {
  const buttonThemeMain = document.getElementById("theme-01");
  const buttonThemeSecondary = document.getElementById("theme-02");

  buttonThemeMain.addEventListener("click", changeTheme);
  buttonThemeSecondary.addEventListener("click", changeTheme);

  function changeTheme() {
    const body = document.querySelector("body");
    body.setAttribute("class", "");
    body.classList.add(this.getAttribute("id"));
  }
}
alternateTheme();
function insertToDisplay(data) {
  if (
    document.getElementById("display").value === "00" ||
    document.getElementById("display").value === "ERROR ;C"
  ) {
    if (["+", "-", "/", "*"].includes(data)) {
      document.getElementById("display").value = "0" + data;
    } else {
      document.getElementById("display").value = data;
    }
  } else {
    document.getElementById("display").value += data;
  }
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
