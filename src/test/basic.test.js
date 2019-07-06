import { escapeComponent } from "uri-js";

const sum = (a, b) => {
  return a + b;
};

test("1+2=3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("calculates 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

const sumOf = numbers => {
  return numbers.reduce((acc, current) => acc + current, 0);
};

describe("sum", () => {
  it("calculates 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("calculaltes all numbers", () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
