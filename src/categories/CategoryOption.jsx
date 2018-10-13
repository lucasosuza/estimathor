import React, { Component } from "react";

class CategoryOption extends Component {
  state = {};
  render() {
    const { title, description } = this.props.option;

    console.log(this.props.option);

    return (
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryOption;
