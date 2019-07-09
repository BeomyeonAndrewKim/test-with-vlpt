import React from "react";
import { mount } from "enzyme";
import { render } from '@testing-library/react';
import Profile from "./Profile";


describe("<Profile /> with enzyme", () => {
  const wrapper = mount(<Profile username="Andrea" name="beomyeon" />);
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

describe('<Profile /> with react-testing-library', () => {
  const utils = render(<Profile username="Andrea" name="beomyeon"/>);
  it('matches snapshot', () => {
    const utils = render(<Profile username="Andrea" name="beomyeon"/>);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    utils.getAllByText("Andrea!");
    utils.getAllByText("(beomyeon)");
    utils.getAllByText(/beom/);
  })
})


