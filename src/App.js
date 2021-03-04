import { Fragment } from "react";
import "./App.css";
import Form from "./form";

import { createStore } from "redux";
import storenameReducer from "./store/storeName";
import { Provider } from "react-redux";

const store = createStore(storenameReducer);

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <header className="App-header">Assignment 6</header>
        <div className="App">
          <Form />
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
