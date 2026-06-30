import { render, screen } from "@testing-library/react";

import ErrorState from "./ErrorState";

describe("ErrorState", () => {
  test("should render error message", () => {
    render(
      <ErrorState
        message="Something went wrong"
      />
    );

    expect(
      screen.getByText(
        "Something went wrong"
      )
    ).toBeInTheDocument();
  });
});