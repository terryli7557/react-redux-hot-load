import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Counter } from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Counter
        count={this.props.count}
        increment={this.props.increment}
        decrement={this.props.decrement}
      />
    );
  }
}

function mapStateToPros(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    }
  };
}

export default connect(mapStateToPros, mapDispatchToProps)(App);
