import React from "react";
import {render} from "react-dom";

import ListBooks from "../components/ListBooks";
import * as Constants from "../Constants";
function handleAddBookCallback() {}
function handleBookUpdateCallback() {}

let SHELVES_TEXT =  Constants.SHELVES.map(({title, id}, _) => (
    {title}.title
)).join("")

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


it("Render one book in BookShelf", () => {
  render(
    <ListBooks
      handleAddBookCallback={handleAddBookCallback.bind(
      this,
      )}
      books={oneBook}
      handleBookUpdateCallback={handleBookUpdateCallback.bind(
      this
      )}
    />, container
  );

  let listBooksDiv = container.querySelector("div");

  expect(listBooksDiv.className).toBe("list-books");
  expect(listBooksDiv.textContent).toContain(SHELVES_TEXT);

  let listBooksTitleDiv = listBooksDiv.querySelector("div");

  expect(listBooksTitleDiv.className).toBe("list-books-title");
  expect(listBooksTitleDiv.textContent).toContain("MyReads");


});
