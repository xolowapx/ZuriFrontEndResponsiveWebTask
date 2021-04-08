let hamburger = document.getElementById(".hamburger");
let modal = document.getElementById(".modal");
let logo = document.getElementById(".logo");
let closeicon = document.getElementById(".close");

hamburger.addEventListener("click", () => {
  modal.style.display = "block";
  hamburger.style.display = "none";
  logo.style.display = "none";
});
closeicon.addEventListener("click", () => {
  modal.style.display = "none";
  hamburger.style.display = "block";
  logo.style.display = "block";
});
