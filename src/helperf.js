import { libraryArray } from "./addBook";

export function createDomElem(text, desc, toAppend, i) {
  const h3 = document.createElement("h3");
  h3.id = i;
  h3.innerText = `${desc}${text}`;
  h3.contentEditable = "true";
  h3.classList.add("h3");
  toAppend.appendChild(h3);
}

export function removeElement() {
  restoreLocal();
}

const modal = document.querySelector(".modal");
export function toggle() {
  modal.classList.toggle("show-modal");
}

function restoreLocal() {
  let libraryArray = [];
  libraryArray = JSON.parse(localStorage.getItem("libraryArray"));
  if (libraryArray === null) libraryArray = [];
}
