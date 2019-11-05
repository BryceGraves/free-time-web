// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
class App extends React.Component {
  state = {};

  componentDidUpdate() {
    console.log('My compontent re-rendered');
  }

  renderContent() {
    return <div>Test</div>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  };
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
