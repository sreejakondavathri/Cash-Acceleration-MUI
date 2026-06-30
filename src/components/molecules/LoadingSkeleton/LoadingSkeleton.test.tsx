import { render, screen } from "@testing-library/react";

import LoadingSkeleton from "./LoadingSkeleton";

describe("LoadingSkeleton", () => {
  test("renders skeleton placeholders", () => {
    render(<LoadingSkeleton />);

    const skeletons =
      screen.getAllByTestId(
        "loading-skeleton"
      );

    expect(skeletons).toHaveLength(5);
  });
});