import React from "react";
import {render} from "react-dom";
import * as Constants from "../Constants";
import ListBooksContent from "../components/ListBooksContent";
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

it("Render proper List of Books Content", () => {
  render(
    <ListBooksContent
      books={oneBook}
      handleBookUpdateCallback={handleBookUpdateCallback.bind(this)}
    />, container
  );
  let books_container = container.querySelector("div")
  expect(books_container.textContent).toContain(Constants.SHELVES[0].title);
  expect(books_container.textContent).toContain(Constants.SHELVES[1].title);
  expect(books_container.textContent).toContain(Constants.SHELVES[2].title);
});
