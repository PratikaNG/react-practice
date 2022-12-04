import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>counter App using state</h1>
      </header>
      <h2>The current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => (count > 9 ? "" : setCount(count + 1))}>
        Increase Counter
      </button>
      <button onClick={() => (count < 1 ? setCount(0) : setCount(count - 1))}>
        Decrease Counter
      </button>
    </div>
  );
}

export default App;
