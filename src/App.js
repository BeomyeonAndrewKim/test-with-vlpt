import React from "react";
import Profile from "./Profile";
import Counter from "./Counter";
import HookCounter from "./HookCounter";

function App() {
  return (
    <div className="App">
      <Profile username="Andrea" name="beomyeon" />
      <Counter />
      <HookCounter />
    </div>
  );
}

export default App;
