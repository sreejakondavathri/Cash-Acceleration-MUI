import { render, screen } from "@testing-library/react";

import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  test("should render empty message", () => {
    render(
      <EmptyState
        message="No Contracts Found"
      />
    );

    expect(
      screen.getByText(
        "No Contracts Found"
      )
    ).toBeInTheDocument();
  });
});