import { Fragment, useState } from "react";
import "./App.css";
import { connect } from "react-redux";

const Form = (props) => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [showComponent, setShowComponent] = useState(false);

  return (
    <Fragment>
      <div className="container">
        <label className="lbl">Save Persons</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={(event) => {
            setFirstName((firstName = event.target.value));
          }}
          className="FirstNameBox"
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(event) => {
            setLastName((lastName = event.target.value));
          }}
          className="LastNameBox"
        />
        <button
          onClick={() =>
            props.onStoreResult(
              { firstname: firstName, lastname: lastName },
              setShowComponent(true)
            )
          }
          className="SaveBtn"
        >
          Save
        </button>
      </div>
      <div>
        {showComponent
          ? props.names.map((name) => (
              <h1>
                {name.firstname} {" "} {name.lastname}
              </h1>
            ))
          : ""}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    names: state.names,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStoreResult: (data) => dispatch({ type: "ADD", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
