function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach(el => {
    fetch(el.getAttribute("data-include"))
      .then(response => response.text())
      .then(data => el.innerHTML = data);
  });
}
includeHTML();

var mySidebar = document.getElementById("mySidebar");
function w3_open() { mySidebar.style.display = (mySidebar.style.display === 'block') ? 'none' : 'block'; }
function w3_close() { mySidebar.style.display = "none"; }
