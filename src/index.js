import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./containers/landingPage";

class App extends React.Component {
  state = {
    currentPage: 0,
  };

  componentDidUpdate() {
    console.log("APPLICATION RE-RENDERED");
  }

  renderContent() {
    var content = <LandingPage />;

    if (this.state.currentPage === 1) {
      content = <div>Not Default</div>;
    } else if (this.state.currentPage === 2) {
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

ReactDOM.render(<App />, document.querySelector("#root"));
