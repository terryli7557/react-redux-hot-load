import {Component} from "react";
import React from "react";
import './Counter.css';

export class Counter extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        {this.props.count} test this is cool!
        <div className="button-container">
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
