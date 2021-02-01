"use strict";
import { library } from "./addBook";
import { toggle } from "./helperf";

window.onload = function () {
  document.querySelector(".modal-button").addEventListener("click", toggle);
  let modal = document.querySelector(".modal");
  document.querySelector(".cancel").addEventListener("click", toggle);

  document.getElementById("add").addEventListener("click", function (e) {
    e.preventDefault();
    library.addBook();
  });
};
