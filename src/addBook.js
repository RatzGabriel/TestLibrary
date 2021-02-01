import { Book } from "./BookConstructor";
import { dom } from "./DOM";

const library = (function () {
  let library = [];

  const addBook = function () {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const completed = document.getElementById("completed");
    const image = document.getElementById("img-url");

    const book = new Book(
      title.value,
      author.value,
      pages.value,
      completed.value,
      image.value
    );

    library.push(book);
    dom.addBooktoDom(book);
    console.log(library);
  };
  return { addBook };
})();

export { library };
