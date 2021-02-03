import { library } from "./addBook";
import { toggle } from "./helperf";
import { dom } from "./DOM";

let libraryArray = [];

window.onload = function () {
  restoreLocal();
  for (const elem of libraryArray) {
    dom.addBooktoDom(elem);
  }
  document.querySelector(".modal-button").addEventListener("click", toggle);
  document.querySelector(".cancel").addEventListener("click", toggle);

  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();
    library.addBook();
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
};

function restoreLocal() {
  libraryArray = JSON.parse(localStorage.getItem("libraryArray"));
  if (libraryArray === null) libraryArray = [];
}
