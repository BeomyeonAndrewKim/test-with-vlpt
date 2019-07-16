import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요.");
    const button = getByText("등록");
    return {
      ...utils,
      input,
      button
    };
  };
  const onInsert = jest.fn();
  const { input, button } = setup({ onInsert });
  it("has input and button", () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("changes input", () => {
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기"
      }
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clear input", () => {
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기"
      }
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
