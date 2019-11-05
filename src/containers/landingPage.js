import React from "react";

import styles from "./landingPage.scss"

class LandingPage extends React.Component {
  componentDidUpdate() {
    console.log("MAIN PAGE LOADED");
  }

  render() {
    return (
      <>
        <div style={styles.div}>
          Test
        </div>
      </>
    );
  }
}

export default LandingPage
