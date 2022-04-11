import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./store/states";
import "./App.css";

const USER_PERSIST = JSON.parse(window.localStorage.getItem("user")) == null ? { success: false, error: false, data: [] } : JSON.parse(window.localStorage.getItem("user"));

function App(props) {
  const [state, setState] = useState(USER_PERSIST);

  const { user, dispatchRequestGetUser, dispatchRequestGetUserInit } = props;

  useEffect(() => {
    state.data.length === 0 && setTimeout(() => dispatchRequestGetUser(), 3000);
  }, [dispatchRequestGetUser, state]);

  useEffect(() => {
    if (user.success) {
      setState(user);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <div>
      {state.success
        ? state.data.map((val) => (
            <div key={val.id}>
              <img src={val.picture} alt="" />
              <p>ID: {val.id}</p>
              <p>
                {val.title} {val.firstName} {val.lastaName}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
