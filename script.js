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
form.addEventListener("submit", checkValidation);

function modalOpener() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

function modalCloser() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

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

  function checkValidation(event) {
    const formFields = form.elements;
    // Loop through all form fields to check if they are filled
    for (let i = 0; i < formFields.length; i++) {
      const field = formFields[i];
      if (field.value === "") {
        event.preventDefault();
        alert("Please fill out all fields.");
        return;
      }
    }
  }
}
