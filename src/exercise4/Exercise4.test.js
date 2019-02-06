import { cleanup, render, fireEvent } from "react-testing-library";
import React from "react";

import "jest-dom/extend-expect";
import {Exercise4} from "./Exercise4"

afterEach(cleanup);

test("Count should be updated and buttons should inc/dec count", () => {
  const { queryByTestId } = render(<Exercise4 />);

  expect(queryByTestId('off')).not.toBeNull();
  expect(queryByTestId('on')).toBeNull()

  fireEvent.click(queryByTestId('off'))

  expect(queryByTestId('off')).toBeNull();
  expect(queryByTestId('on')).not.toBeNull()


  fireEvent.click(queryByTestId('on'))

  expect(queryByTestId('off')).not.toBeNull();
  expect(queryByTestId('on')).toBeNull()
});
