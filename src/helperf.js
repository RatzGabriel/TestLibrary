export function createDomElem(text, desc, toAppend) {
  const h3 = document.createElement("h3");
  h3.innerText = `${desc}: ${text}`;
  h3.contentEditable = "true";
  h3.classList.add("h3");
  toAppend.appendChild(h3);
}

export function removeElement() {}

let modal = document.querySelector(".modal");
export function toggle() {
  modal.classList.toggle("show-modal");
}
