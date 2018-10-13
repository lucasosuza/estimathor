import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Category from "./categories/Category";

class App extends Component {
  state = {
    categories: [
      {
        id: 1,
        title: "size",
        description: "description",
        options: [
          {
            id: 1,
            title: "Small",
            description:
              " Your app probably has around 4-5 key feature pages (excluding any static content, sign in, sign up etc.) ",
            effort: "",
            cost: ""
          },
          {
            id: 2,
            title: "Medium",
            description:
              " Your app probably has around 6-9 key feature pages (excluding any static content, sign in, sign up etc.) ",
            effort: "",
            cost: ""
          },
          {
            id: 3,
            title: "Pequeno",
            description:
              " Your app probably has around 10-15 key feature pages (excluding any static content, sign in, sign up etc.) ",
            effort: "",
            cost: ""
          }
        ]
      }
    ]
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
