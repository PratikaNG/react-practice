import React from "react";
import "./style.css";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello World</h1>
      {/*<button className="button">PlayStore</button>
  <button className="button">AppStore</button>*/}
      <Button title="AppStore" />
      <Button title="PlayStore" />
    </div>
  );
};

export default App;
