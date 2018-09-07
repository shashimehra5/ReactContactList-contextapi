import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    // console.log(this.state);

    // const { name, email, phone } = this.state;
    // const newContacts = {
    //   id: uuid(),
    //   name,
    //   email,
    //   phone
    // };

    // dispatch({ type: "ADD_CONTACT", payload: newContacts });

    console.log(contact);
  };

  static defaultProps = {
    name: "fred Smith",
    email: "fred@gmail.com",
    phone: "555-555-555"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      defaultValue={email}
                      ref={this.emailInput}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone..."
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                  </div>
                  <input type="submit" className="btn btn-block btn-success" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
