function toggleTheme() {
  var bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function() {
    toggleTheme();
  });
});
