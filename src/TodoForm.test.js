import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  const { getByText, getByPlaceholderText } = render(<TodoForm />);
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
});
