import React from "react";
import Profile from "./Profile";
import Counter from "./Counter";
import HookCounter from "./HookCounter";
import DealyedToggle from "./DelayedToggle";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Profile username="Andrea" name="beomyeon" />
      <Counter />
      <HookCounter />
      <DealyedToggle />
      <UserProfile id={1} />
    </div>
  );
}

export default App;
