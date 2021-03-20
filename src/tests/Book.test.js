import React from "react";
import {render} from "react-dom";

import Book from "../components/Book";
function handleBookCallback() {}
let oneBookEmptyAuthor = {
    "bookId": {"title": "First Book", "shelf": "read"},
}
let oneBookLongAuthor = {
    "bookId": {"title": "First Book", "shelf": "read", "authors": ["Mike Hendrickson", "Brian Sawyer"]},
}
let container = null;
beforeEach(() => {
  // Fixes temporarily issue with fromEntries is not a function.
  Object.fromEntries = l => l.reduce((a, [k,v]) => ({...a, [k]: v}), {});

  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("Render one Book", () => {
  render(
    <Book
      stateBookId={oneBookEmptyAuthor.bookId.id}
      data={oneBookEmptyAuthor.bookId}
      handleBookUpdateCallback={handleBookCallback.bind(this)}
    />, container
  );

  expect(
      container.textContent
  ).toContain("First Book");
  let bookAuthorsDiv = container.querySelector("div").querySelector("div.book-authors")
  expect(
      bookAuthorsDiv.textContent
  ).toContain("");

});

it("Render long author Book", () => {
  render(
    <Book
      stateBookId={oneBookLongAuthor.bookId.id}
      data={oneBookLongAuthor.bookId}
      handleBookUpdateCallback={handleBookCallback.bind(this)}
    />, container
  );

  expect(
      container.textContent
  ).toContain("First Book");
  let bookAuthorsDiv = container.querySelector("div").querySelector("div.book-authors")
  expect(
      bookAuthorsDiv.textContent
  ).toContain("Mike Hendrickson, Brian Sawyer");

});