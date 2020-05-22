/**
 * src/App.js
 */
import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import BookList from "./BookList";

//NOTE: THIS IS NOT THE BEST WAY TO CREATE AN AUTHORIZATION FLOW, THIS CODE IS JUST AN EXAMPLE

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/"}>
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
