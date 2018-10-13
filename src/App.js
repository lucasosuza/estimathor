import React, { Component } from "react";
import "./App.css";

import CategoriesData from "./data.json";

import Navbar from "./components/Navbar";
import Category from "./categories/Category";

class App extends Component {
  state = {
    categories: CategoriesData
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <div className="page-header">
            <h1>
              Asgardian Estima Thor!{" "}
              <small>A electried way to estimate your next app</small>
            </h1>
          </div>

          {this.state.categories.map(category => (
            <Category key={category.id} category={category} />
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
