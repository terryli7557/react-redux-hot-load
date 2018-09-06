import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Counter} from "./Counter";

class App {
  render() {
    return (
      <Counter/>
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
      dispatch({type: 'INCREMENT'});
    },
    decrement: () => {
      dispatch({type: 'DECREMENT'});
    }
  };
}

export default connect(mapStateToPros, mapDispatchToProps)(Counter);
