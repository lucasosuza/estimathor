import React, { Component } from "react";

class Calculations extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3>Resume</h3>

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span class="badge badge-primary badge-pill">1</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calculations;
