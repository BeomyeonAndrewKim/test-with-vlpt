import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
  render,
  fireEvent,
  wait,
  waitForElement,
  waitForDomChange,
  waitForElementToBeRemoved
} from "@testing-library/react";

describe("<DelayedToggle/>", () => {
  const { getByText, container } = render(<DelayedToggle />);
  it("reveals text when toggle is ON", async () => {
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    wait(() => getByText("야호!!"), { timeout: 3000 });
  });

  it("toggles text ON/OFF", async () => {
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const text = await waitForElement(() => getByText("OFF"));
    expect(text).toHaveTextContent("OFF");
  });

  it("changes something when button is clicked", async () => {
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const mutations = await waitForDomChange({ container });
    console.log(mutations);
  });

  it("removes text when toggle is OFF", async () => {
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => getByText("야호!!"));
  });
});
