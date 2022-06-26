import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import { Home } from "./component/Home";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className={`${!isLoggedin ? "App" : "Home"}`}>
      {!isLoggedin && <Form login={setIsLoggedin} />}
      {isLoggedin && <Home />}
    </div>
  );
};

export default App;
