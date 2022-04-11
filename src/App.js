import React from "react";
import Banner from "./components/Banner/Banner";
import SetupRouters from "./routes/index";
import "./App.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Banner />
            <SetupRouters />
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}

export default App;
