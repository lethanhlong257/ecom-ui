import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./reducer.js";

import "./index.css";
import indexRoutes from "routes/index.route.jsx";

import "assets/scss/material-kit-react.css?v=1.3.0";
import * as serviceWorker from "./serviceWorker";

// Create an enhanced history that syncs navigation events with the store
var hist = createBrowserHistory();
const routeMiddleware = routerMiddleware(hist);

// Add the reducer to your store on the `routing` key
const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk, routeMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
