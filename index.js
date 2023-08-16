const button = document.getElementById("myButton");
const text = document.getElementById("displayText");

button.addEventListener("click", function () {
  text.style.display = "none";
  text.style.backgroundColor="red";
});