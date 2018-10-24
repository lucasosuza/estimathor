import React, { Component } from "react";

import Category from "../categories/Category";

import CategoriesData from "../data.json";

class Home extends Component {
  state = {
    categories: CategoriesData
  };

  render() {
    return (
      <div>
        <h2>Home</h2>

        {this.state.categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    );
  }
}

export default Home;
