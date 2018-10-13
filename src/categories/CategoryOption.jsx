import React, { Component } from "react";

class CategoryOption extends Component {
  state = {
    selected: false
  };

  handleSelect = () => {
    const selected = !this.state.selected;
    this.setState({ selected });
  };

  getSelectedClass() {
    let classes = "card ";
    classes += this.state.selected ? "text-white bg-dark" : "";

    return classes;
  }

  render() {
    const { title, description } = this.props.option;
    return (
      <div className="col-sm-4">
        <div className={this.getSelectedClass()}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary" onClick={this.handleSelect}>
              Select
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryOption;
