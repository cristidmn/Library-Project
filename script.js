"use strict";

//select all components

const addBook = document.querySelector(".submit-btn");
const cardWrapper = document.querySelector(".card-wrapper");
const inputTitle = document.getElementById("bookTitle");
const inputAuthor = document.getElementById("bookAuthor");
const inputYear = document.getElementById("bookYear");
const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");

//EVENT LISTENERS
openModal.addEventListener("click", modalOpener);
closeBtn.addEventListener("click", modalCloser);
form.addEventListener("submit", addBookToLibrary);

function modalOpener() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

function modalCloser() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const isModalOpen = modal.style.display === "block";
    if (isModalOpen) {
      modalCloser();
    }
  }
});

function addBookToLibrary(e) {
  e.preventDefault();
  //create a div with class card and add it to the cardWrapper
  const card = document.createElement("div");
  card.classList.add("card");
  cardWrapper.appendChild(card);

  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("title");
  card.appendChild(bookTitle);
  bookTitle.innerText = inputTitle.value;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("author");
  card.appendChild(bookAuthor);
  bookAuthor.innerText = inputAuthor.value;

  const bookYear = document.createElement("p");
  bookYear.classList.add("year");
  card.appendChild(bookYear);
  bookYear.innerText = inputYear.value;

  modal.style.display = "none";
  overlay.style.display = "none";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  card.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Delete";

  deleteBtn.addEventListener("click", deleteBook);

  function deleteBook(e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
      const card = item.parentElement;
      card.remove();
    }
  }
}
