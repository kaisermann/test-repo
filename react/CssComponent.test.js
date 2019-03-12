import React from "react";
import { render } from "@vtex/vtex-scripts/test-utils";
import CssComponent from "./CssComponent";

test("should render the class name", () => {
  const { getByText, debug } = render(<CssComponent />);

  const element = getByText('Hello')

  expect(element.className).toBe('hello')
});
