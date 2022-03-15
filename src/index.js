import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import DarkSky from "./DarkSky";
import { store } from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <DarkSky />
  </Provider>,
  document.getElementById("root")
);
