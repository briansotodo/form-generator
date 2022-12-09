import { FormItemType } from "../index.types";
import EXAMPLE_FORM from "./example-form";

import simulateUserInput from "./simulateUserInput";
import validateConfig from "./validateConfig";

const EXAMPLE_FROM_JSON = JSON.parse(EXAMPLE_FORM);

test("It doesn't throw on valid input and returns the argument", () => {
  expect(() => validateConfig(EXAMPLE_FROM_JSON)).not.toThrow();
  expect(validateConfig(EXAMPLE_FROM_JSON)).toBe(EXAMPLE_FROM_JSON);
});

///- Test 'title' property.

test("It doesn't throw if 'title' is missing", () => {
  const config = {
    actions: [],
    items: [{ label: "Taco?", type: FormItemType.Boolean }],
  };

  expect(() => validateConfig(config)).not.toThrow();
});

test("It throws if 'title' is not a string", () => {
  const config = simulateUserInput({
    title: 3,
    items: [{ label: "Taco?", type: FormItemType.Boolean }],
  });

  expect(() => validateConfig(config)).toThrow();
});

///- Test 'actions' property.

test("It doesn't throw if 'action' is missing", () => {
  const config = {
    title: "No name",
    items: [{ label: "Taco?", type: FormItemType.Boolean }],
  };

  expect(() => validateConfig(config)).not.toThrow();
});

test("It throws if 'actions' is not an array", () => {
  const config = simulateUserInput({
    actions: 3,
    items: [{ label: "Taco?", type: FormItemType.Boolean }],
  });

  expect(() => validateConfig(config)).toThrow();
});

test("It throws if an actions' element doesn't have a text property", () => {
  let config = simulateUserInput({
    actions: [{}],
    items: [{ label: "Taco?", type: FormItemType.Boolean }],
  });

  expect(() => validateConfig(config)).toThrow();

  config = simulateUserInput({
    actions: [{ type: "secondary" }],
    items: [{ label: "Taco?", type: FormItemType.Boolean }],
  });

  expect(() => validateConfig(config)).toThrow();
});

///- Tests 'items' property

test("It throws if 'items' is missing", () => {
  const config = simulateUserInput({});
  expect(() => validateConfig(config)).toThrow();
});

test("It throws if 'items' is not an array", () => {
  const config = simulateUserInput({ items: "🍕" });
  expect(() => validateConfig(config)).toThrow();
});

test("It throws if 'items' an array array", () => {
  const config = simulateUserInput({ items: [] });
  expect(() => validateConfig(config)).toThrow();
});

test("It throws if 'items' elements don't have a 'label'", () => {
  const config = simulateUserInput({
    items: [
      { notALabel: "Taco?", type: FormItemType.Boolean },
      { Label: "Pizza", type: FormItemType.Boolean },
    ],
  });
  expect(() => validateConfig(config)).toThrow();
});
