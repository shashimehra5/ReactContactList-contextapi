import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter as Rout, Route, Switch } from "react-router-dom";
import About from "./components/pages/about";
import Test from "./components/pages/test";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";
class App extends Component {
  render() {
    return (
      <Provider>
        <Rout>
          <div className="App">
            <Header branding="Contact Manager" />
            <br />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/addcontact" component={AddContact} />
                <Route exact path="/editcontact/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Rout>
      </Provider>
    );
  }
}

export default App;
