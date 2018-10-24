import React, { Component } from "react";
import "./App.css";



import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./views/Home";
import { About } from "./pages/About";

class App extends Component {
  

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Estima Thor
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li>
                  <Link className="nav-item" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="container">
            <div className="page-header">
              <h1>
                Asgardian Estima Thor!{" "}
                <small>A electried way to estimate your next app</small>
              </h1>
            </div>

            <div className="page-body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
