import React, { Component } from "react";
import { Provider } from "mobx-react";
import App from "./App";
import store from "./store";

class Container extends Component {
  componentWillMount() {
    return store.data.getData();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Container;
