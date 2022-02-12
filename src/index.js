import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import movies from "./reducers";

const store = createStore(movies);
console.log("store", store);
console.log("BEFORE STATE", store.getState());

store.dispatch({
  type: "ADD_MOVIES",
  movies: [{ name: "Superman" }],
});

console.log("AFTER STATE", store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
