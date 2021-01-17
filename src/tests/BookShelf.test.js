import React from "react";
import ReactDOM from "react-dom";
import BookShelf from "../components/BookShelf";

function handleBookUpdateCallback(){

}
it("renders all books", () => {
  // Fixes temporarily issue with fromEntries is not a function.
  Object.fromEntries = l => l.reduce((a, [k,v]) => ({...a, [k]: v}), {});
  const div = document.createElement("div");
  ReactDOM.render(
      <BookShelf
          handleBookUpdateCallbac={handleBookUpdateCallback.bind(this)}
          name={"Test"}
          books={{}}
      />, div);
});
