import React, { Component } from "react";
import "./App.css";
import MovieContainer from "./components/movieContainer.js";

const Loading = Component => {
  return ({ isLoading }) => {
    if (!isLoading) return <Component />;
    return <div className="loader" />;
  };
};
const Content = Loading(MovieContainer);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  render() {
    return (
      <div className="App">
        <Content isLoading={this.state.loading} />
      </div>
    );
  }
}

export default App;
