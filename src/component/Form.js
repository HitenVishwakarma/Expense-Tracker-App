import { useEffect, useState } from "react";
import "../App.css";

const Form = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPwd, setEnteredPwd] = useState("");
  const [emailIsValid, setEmialIsValid] = useState();
  const [pwdIsValid, setPwdIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState();
  const [emailLabelActive, setEmailLabelActive] = useState(false);
  const [pwdLabelActive, setPwdLabelActive] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    validateEmail();
    // validatePwd();
    setFormIsValid(enteredEmail.includes("@") && enteredPwd.trim().length > 6);
  }, [enteredEmail, enteredPwd]);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEmailLabelActive(true);
  };

  const pwdChangeHandler = (e) => {
    setEnteredPwd(e.target.value);
    setPwdLabelActive(true);
  };

  const validateEmail = () => {
    if (enteredEmail.includes("@")) {
      setEmialIsValid(true);
      setError(false);
    } else if (enteredEmail.length <= 0) {
      setEmailLabelActive(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  const validatePwd = () => {
    if (enteredPwd.trim().length > 0) {
      setPwdIsValid(true);
      setError(false);
    } else if (enteredPwd.length <= 0) {
      setPwdLabelActive(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  const style = (error) => {
    if (error) {
      return {
        borderBottom: "2px red solid",
      };
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.login(true);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Please login</h1>
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <input
              type="text"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmail}
              style={style(error)}
              required
            />
            <label className={`${emailLabelActive ? "label-active" : ""}`}>
              Email
            </label>
          </div>
          <div className="form-control">
            <input
              type="password"
              value={enteredPwd}
              onChange={pwdChangeHandler}
              onBlur={validatePwd}
              style={style(error)}
              required
            />
            <label className={`${pwdLabelActive ? "label-active" : ""}`}>
              Password
            </label>
          </div>
          <button className="btn" disabled={!formIsValid}>
            Login
          </button>
          <p className="text">
            Don't have accout? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
