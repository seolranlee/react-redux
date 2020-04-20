import React, { Component } from "react";
import AddNumber from "../components/AddNumber";
import store from "../store";
class AddNumberContainer extends Component {
  render() {
    return (
      <AddNumber
        onClick={size => {
          store.dispatch({ type: "INCREMENT", size });
        }}
      />
    );
  }
}

export default AddNumberContainer;
