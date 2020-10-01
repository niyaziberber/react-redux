import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import DonutContainer from "./components/DonutContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
