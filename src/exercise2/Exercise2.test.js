import { cleanup, render, fireEvent } from "react-testing-library";
import { Exercise1, Exercise2 } from "./Exercise2";
import React from "react";

import "jest-dom/extend-expect";

afterEach(cleanup);

test("Count should be updated and buttons should inc/dec count", () => {
  const { getByTestId } = render(<Exercise2 />);

  expect(getByTestId("exercise-1-count")).toHaveTextContent(0);

  fireEvent.click(getByTestId("inc-button"));
  expect(getByTestId("exercise-1-count")).toHaveTextContent(1);

  fireEvent.click(getByTestId("inc-button"));
  expect(getByTestId("exercise-1-count")).toHaveTextContent(2);

  fireEvent.click(getByTestId("inc-button"));
  expect(getByTestId("exercise-1-count")).toHaveTextContent(3);

  fireEvent.click(getByTestId("dec-button"));
  expect(getByTestId("exercise-1-count")).toHaveTextContent(2);

  fireEvent.click(getByTestId("reset-button"));
  expect(getByTestId("exercise-1-count")).toHaveTextContent(0);


  fireEvent.click(getByTestId("inc-button"));
  expect(getByTestId("exercise-1-count")).toHaveTextContent(1);
});
