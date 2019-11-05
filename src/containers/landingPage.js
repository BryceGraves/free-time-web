import React from "react";

import background from "../images/working-students.jpg";

class LandingPage extends React.Component {
  componentDidMount() {
    console.log("MAIN PAGE LOADED");
  }

  render() {
    return (
      <div className="mainContainer" style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`}}>
        <h1 className="titleText">Free Time</h1>
        <button onClick={this.props.changePage}>Store Front</button>
      </div>
    );
  }
}

export default LandingPage
