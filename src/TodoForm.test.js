import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  const onInsert = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <TodoForm onInsert={onInsert} />
  );
  it("has input and button", () => {
    getByPlaceholderText("할 일을 입력하세요.");
    getByText("등록");
  });

  it("changes input", () => {
    const input = getByPlaceholderText("할 일을 입력하세요.");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기"
      }
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clear input", () => {
    const input = getByPlaceholderText("할 일을 입력하세요.");
    const button = getByText("등록");

    fireEvent.change("input", {
      target: {
        value: "TDD 배우기"
      }
    });

    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
