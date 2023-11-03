import React, { Component } from "react";

class ClassWithProps extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default ClassWithProps;
