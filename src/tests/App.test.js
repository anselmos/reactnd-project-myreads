import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it("renders without crashing", () => {
  // Fixes temporarily issue with fromEntries is not a function.
  Object.fromEntries = l => l.reduce((a, [k,v]) => ({...a, [k]: v}), {});
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
