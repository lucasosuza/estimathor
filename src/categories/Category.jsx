import React, { Component } from "react";

import CategoryOption from "./CategoryOption";

class Category extends Component {
  render() {
    const { title, description, options } = this.props.category;

    return (
      <div className="row mt-5">
        <div className="col-12">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {options.map(option => (
          <CategoryOption key={option.id} option={option} />
        ))}
      </div>
    );
  }
}

export default Category;
