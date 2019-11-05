import React from "react";

import background from "../images/working-students.jpg";

class Checkout extends React.Component {
  componentDidMount() {
    console.log("MAIN PAGE LOADED");
  }

  render() {
    return (
      <div className="mainContainer">
        <h1 className="titleText">Checkout</h1>
        <button onClick={this.props.changePage}>BUY THE THINGS</button>
      </div>
    );
  }
}

export default Checkout
