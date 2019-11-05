import React from "react";

import background from "../images/working-students.jpg";

class Storefront extends React.Component {
  componentDidMount() {
    console.log("MAIN PAGE LOADED");
  }

  render() {
    return (
      <div className="mainContainer">
        <h1 className="titleText">Storefront!</h1>
        <h2 style={{textAlign: "center"}}>Buy the things!</h2>
        <button onClick={this.props.changePage}>Proceed to Checkout</button>
      </div>
    );
  }
}

export default Storefront
