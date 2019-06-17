import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./App.css";
import Routes from "./routes";

@inject("store")
@observer
export default class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <div>
        {store.ui.loading && <div>Loading</div>}
        {!store.ui.loading && (
          <div className="app">
            <Routes />
          </div>
        )}
      </div>
    );
  }
}
