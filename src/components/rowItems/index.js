import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Button } from "../button";

export class RowItems extends Component {
  static propTypes = {};

  render() {
    const { items, addHandler } = this.props;
    return (
      <form>
        <div className="items-container">
          <Button onClick={addHandler}>Add Item</Button>
          <div className="warning-message">Maximun number of item reached</div>

          <table role="table">
            <thead>
              <tr role="row">
                <th role="columnheader">Product Id</th>
                <th role="columnheader">Description</th>
                <th role="columnheader">Quantity</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="row header"></div>
        </div>
      </form>
    );
  }
}

export default RowItems;
