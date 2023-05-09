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
const myForm = document.querySelector("form");

//EVENT LISTENERS
addBook.addEventListener("click", addBookToLibrary);
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

let myLibrary = [
  "I will teach you to be rich",
  "Subtle art of not giving a fuck",
  "Alice in Wonderland",
];

function Book() {
  // the constructor...
}

function addBookModal() {}

function addBookToLibrary(event) {
  event.preventDefault();
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
}

function loopArray(item) {
  for (const item of myLibrary);
  console.log(item);
}

loopArray(myLibrary);
