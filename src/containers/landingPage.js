import React from "react";

import styles from "./landingPage.scss"

// import backgroundImage from "../images/working-students.jpg";

class LandingPage extends React.Component {
  componentDidUpdate() {
    console.log("MAIN PAGE LOADED");
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <h1>SOME TEXT</h1>
      </div>
    );
  }
}

export default LandingPage
