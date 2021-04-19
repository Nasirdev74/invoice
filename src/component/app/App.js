import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ClientInvoiceContainer, InvoiceContainer, Menu} from "../index";
import React from "react";

function App(props) {
  return (
    <div className="App">

      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <Menu/>
            </div>
          </div>
        </div>
        <Switch>
          <Route path='/invoice/' exact component={InvoiceContainer}/>
          <Route path='/invoice/preview/' component={ClientInvoiceContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App

