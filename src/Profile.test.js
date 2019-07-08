import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

const wrapper = mount(<Profile username="Andrea" name="beomyeon" />);
describe("<Profile />", () => {
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders username and name", () => {
    expect(wrapper.props().username).toBe("Andrea");
    expect(wrapper.props().name).toBe("beomyeon");

    const boldElement = wrapper.find("b");
    expect(boldElement.contains("Andrea")).toBe(true);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("(beomyeon)");
  });
});
