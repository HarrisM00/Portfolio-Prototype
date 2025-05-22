function toggleMode() {
  document.body.classList.toggle("light-mode");

  // Save user preference
  const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("mode", mode);
}

window.onload = function () {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "light") {
    document.body.classList.add("light-mode");
  }
};
