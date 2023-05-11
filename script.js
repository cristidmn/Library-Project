"use strict";

//select all components

const addBook = document.querySelector(".submit-btn");
const cardWrapper = document.querySelector(".card-wrapper");
const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");

//EVENT LISTENERS
// addBook.addEventListener("click", addBookToLibrary);
openModal.addEventListener("click", modalOpener);
closeBtn.addEventListener("click", modalCloser);

function modalOpener() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

function modalCloser() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

function deleteBook(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const card = item.parentElement;
    card.remove();
  }
}

function addBookToLibrary({
  bookTitle: bookTitleValue,
  bookAuthor: bookAuthorValue,
  bookYear: bookYearValue,
}) {
  const card = document.createElement("div");
  card.classList.add("card");
  cardWrapper.appendChild(card);

  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("title");
  card.appendChild(bookTitle);
  bookTitle.innerText = bookTitleValue;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("author");
  card.appendChild(bookAuthor);
  bookAuthor.innerText = bookAuthorValue;

  const bookYear = document.createElement("p");
  bookYear.classList.add("year");
  card.appendChild(bookYear);
  bookYear.innerText = bookYearValue;

  modal.style.display = "none";
  overlay.style.display = "none";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  card.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Delete";

  deleteBtn.addEventListener("click", deleteBook);
}

function checkValidation(e) {
  e.preventDefault();

  const book = {};

  const fields = [...e.target].filter((item) => item.type === "text");

  const ifFormFilled = fields.some((field) => field !== "");

  if (ifFormFilled) {
    fields.forEach((input) => {
      book[input.id] = input.value;
    });

    fields.forEach((input) => {
      book[input.id] = input.value;
    });

    addBookToLibrary(book);
  } else {
    alert("Please fill out all fields.");
  }
}

form.addEventListener("submit", checkValidation);
