import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import Layout from "./layout";
import Reducers from "./reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
// import Navbar from '.'
import Navbar from "./components/navbar/navbar";
const createStoreWithMiddleware =
  applyMiddleware(promiseMiddleware)(createStore);
const App = () => {
  return (
    <div>
      <Layout>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Router />
        </BrowserRouter>
      </Layout>
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
