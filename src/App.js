import React from "react";
import Profile from "./Profile";
import Counter from "./Counter";
import HookCounter from "./HookCounter";
import DealyedToggle from "./DelayedToggle";

function App() {
  return (
    <div className="App">
      <Profile username="Andrea" name="beomyeon" />
      <Counter />
      <HookCounter />
      <DealyedToggle />
    </div>
  );
}

export default App;
