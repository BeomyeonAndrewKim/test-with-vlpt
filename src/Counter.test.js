import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

const wrapper = shallow(<Counter />);

describe("<Counter/>", () => {
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has initial number", () => {
    expect(wrapper.state().number).toBe(0);
  });

  it("increases", () => {
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });

  it("decrease", () => {
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(0);
  });

  it("calls handleIncrease", () => {
    // 클릭 이벤트를 시뮬레이트하고 state를 확인
    const plusButton = wrapper.findWhere(
      node => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    expect(wrapper.state().number).toBe(1);
  });

  it("calls handleDecrease", () => {
    const minusButton = wrapper.findWhere(
      node => node.type() === "button" && node.text() === "-1"
    );
    minusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("0");
  });
});
