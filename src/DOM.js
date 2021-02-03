import { createDomElem } from "./helperf";
import { libraryArray } from "./addBook";

const dom = (function () {
  const addBooktoDom = function (book) {
    const bookInput = book;
    const cardInput = document.querySelector(".cardInput");
    const containerCardDiv = document.createElement("div");
    containerCardDiv.classList.add("containerCards");
    const rmvButton = document.createElement("button");
    const editButton = document.createElement("button");
    editButton.innerText = "edit save";
    rmvButton.innerText = "Remove Book";

    editButton.addEventListener("click", function () {
      const parent = this.parentNode;
      console.log("parent", parent);
      const nodeList = parent.childNodes;
      console.log(typeof nodeList);
    });
    rmvButton.addEventListener("click", () => {
      libraryArray = libraryArray.filter(
        (rem) => rem.title !== bookInput.title
      );

      console.log(libraryArray);
      saveLocal();
      console.log(libraryArray);
      const input = document.querySelector(".cardInput");
      input.innerHTML = "";
      for (const elem of libraryArray) {
        addBooktoDom(elem);
      }
    });
    createDomElem(book.title, "Title ", containerCardDiv, "0");
    createDomElem(book.author, "Author ", containerCardDiv, "1");
    createDomElem(book.pages, "Pages ", containerCardDiv, "2");
    createDomElem(book.completed, "Completed ", containerCardDiv, "3");
    containerCardDiv.appendChild(editButton);
    containerCardDiv.appendChild(rmvButton);
    cardInput.appendChild(containerCardDiv);
  };

  return { addBooktoDom };
})();

export { dom };

function saveLocal() {
  localStorage.setItem("libraryArray", JSON.stringify(libraryArray));
}
