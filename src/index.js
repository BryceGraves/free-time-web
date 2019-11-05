// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./containers/landingPage";

// Create a react component
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     currentPage: 0,
  //   };
  // }

  state = {
    currentPage: 0,
  };

  componentDidUpdate() {
    console.log("APPLICATION RE-RENDERED");
  }

  renderContent() {
    var content = <LandingPage />;

    if (this.state.currentPage == 1) {
      content = <div>Not Default</div>;
    } else if (this.state.currentPage == 2) {
      content = <div>Not Default 2</div>;
    }

    return content;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
