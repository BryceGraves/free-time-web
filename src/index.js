import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./containers/checkout";
import LandingPage from "./containers/landingPage";
import Storefront from "./containers/storefront";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 0};

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidUpdate() {
    console.log("APPLICATION RE-RENDERED");
  }

  handlePageChange() {
    this.setState(state => ({
      currentPage: state.currentPage + 1,
    }));
  }

  renderContent() {
    var content = <LandingPage changePage={this.handlePageChange} />;

    if (this.state.currentPage % 3 === 1) {
      content = <Storefront changePage={this.handlePageChange} />;
    } else if (this.state.currentPage % 3 === 2) {
      content = <Checkout changePage={this.handlePageChange} />;
    }

    return content;
  }

  render() {
    return (
      <div className="mainContainer">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
