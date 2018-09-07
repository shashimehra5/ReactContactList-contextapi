import React, { Component } from "react";

class test extends Component {
  componentDidMount() {
    console.log("componentDidMount....");
  }
  componentWillMount() {
    console.log("componentWillMount.......");
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default test;
