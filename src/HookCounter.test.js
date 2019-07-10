import React from "react";
import { mount } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import HookCounter from "./HookCounter";

describe("<HookCounter/> with enzyme", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("increases", () => {
    const wrapper = mount(<HookCounter />),
      plusButton = wrapper.findWhere(
        node => node.type() === "button" && node.text() === "+1"
      );
    plusButton.simulate("click");
    plusButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("2");
  });

  it("decreases", () => {
    const wrapper = mount(<HookCounter />),
      decreaseButton = wrapper.findWhere(
        node => node.type() === "button" && node.text() === "-1"
      );

    decreaseButton.simulate("click");
    decreaseButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("-2");
  });
});

describe("<HookCounter/> with react-testing-library", () => {
  const utils = render(<HookCounter />);
  it("matches snapshot", () => {
    expect(utils.container).toMatchSnapshot();
  });

  it("has a number and two buttons", () => {
    utils.getByText("0");
    utils.getByText("+1");
    utils.getByText("-1");
  });

  it("increase", () => {
    const number = utils.getByText("0"),
      plusButton = utils.getByText("+1");

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(number).toHaveTextContent("2"); // jest-dom의 확장 matcher 사용
    expect(number.textContent).toBe("2"); // textContent를 직접 비교
  });

  it("decrease", () => {
    const number = utils.getByText("2"),
      minusButton = utils.getByText("-1");

    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(number).toHaveTextContent("0"); // jest-dom의 확장 matcher 사용
  });
});
