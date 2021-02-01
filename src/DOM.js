import { createDomElem, removeElement } from "./helperf";

const dom = (function () {
  const addBooktoDom = function (book) {
    const cardInput = document.querySelector(".cardInput");
    const containerCardDiv = document.createElement("div");
    containerCardDiv.classList.add("containerCards");
    const rmvButton = document.createElement("button");
    rmvButton.addEventListener("click", removeElement);

    createDomElem(book.title, "Title: ", containerCardDiv);
    createDomElem(book.author, "Author: ", containerCardDiv);
    createDomElem(book.pages, "Pages: ", containerCardDiv);
    createDomElem(book.completed, "Completed: ", containerCardDiv);

    containerCardDiv.appendChild(rmvButton);
    cardInput.appendChild(containerCardDiv);
  };

  return { addBooktoDom };
})();

export { dom };
