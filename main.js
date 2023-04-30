let block = document.getElementById("js");
let show = document.getElementById("show");
let close = document.getElementById("close");

function showMore() {
  block.style.display = "block";
  show.style.display = "none";
}

function closeList() {
  block.style.display = "none";
  show.style.display = "block";
}

let navigation = document.getElementById("navLinks");

function showMenu() {
  navigation.style.left = "0vw";
}

function closeMenu() {
  navigation.style.left = "-30vw";
}
