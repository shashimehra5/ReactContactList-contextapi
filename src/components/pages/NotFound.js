import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">
          <span className="text-danger"> 404</span>
          Page not found
        </h1>
      </div>
    );
  }
}

export default NotFound;
