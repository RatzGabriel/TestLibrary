import { Book } from "./BookConstructor";
import { dom } from "./DOM";

let libraryArray = [];

const library = (function () {
  restoreLocal();
  const addBook = function () {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const completed = document.getElementById("completed");
    const image = document.getElementById("img-url");
    if (
      !title.checkValidity() ||
      !author.checkValidity() ||
      !pages.checkValidity() ||
      !completed.checkValidity()
    ) {
      alert("ALARM");
    }

    const book = new Book(
      title.value,
      author.value,
      pages.value,
      completed.value,
      image.value
    );

    libraryArray.push(book);
    saveLocal();
    dom.addBooktoDom(book);
  };
  return { addBook };
})();

export { library, libraryArray };

function saveLocal() {
  localStorage.setItem("libraryArray", JSON.stringify(libraryArray));
}

function restoreLocal() {
  libraryArray = JSON.parse(localStorage.getItem("libraryArray"));
  if (libraryArray === null) libraryArray = [];
}
