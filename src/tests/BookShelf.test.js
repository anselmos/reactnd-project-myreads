import React from "react";
import {render} from "react-dom";

import BookShelf from "../components/BookShelf";

function handleBookUpdateCallback() {}
let oneBook = {
    "bookId": {"title": "First Book", "shelf": "read"},
}
let container = null;
beforeEach(() => {
  // Fixes temporarily issue with fromEntries is not a function.
  Object.fromEntries = l => l.reduce((a, [k,v]) => ({...a, [k]: v}), {});

  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("Render empty BookShelf", () => {
  render(
      <BookShelf
          handleBookUpdateCallback={handleBookUpdateCallback.bind(this)}
          name={"Test"}
          books={{}}
      />, container
  );
  let books_grid_container = container.querySelector("div")
      .querySelector("div")
      .querySelector("ol")

  expect(
      books_grid_container.className
  ).toBe("books-grid");

  expect(
      books_grid_container.textContent
  ).toContain("");
});



it("Render one book in BookShelf", () => {
  render(
      <BookShelf
          handleBookUpdateCallback={handleBookUpdateCallback.bind(this)}
          name={"Test"}
          books={oneBook}
      />, container
  );
  let books_grid_container = container.querySelector("div")
      .querySelector("div")
      .querySelector("ol")

  expect(
      books_grid_container.className
  ).toBe("books-grid");

  expect(
      books_grid_container.textContent
  ).toContain(oneBook["bookId"].title);
});
