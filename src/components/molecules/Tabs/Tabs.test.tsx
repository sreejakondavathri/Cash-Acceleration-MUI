import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tabs from "./Tabs";

describe("Tabs Component", () => {
  test("should render both tabs", () => {
    render(
      <Tabs
        activeTab="contracts"
        onTabChange={vi.fn()}
      />
    );

    expect(
      screen.getByRole("tab", {
        name: /my contracts/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("tab", {
        name: /my cash kicks/i,
      })
    ).toBeInTheDocument();
  });

  test("should select My Contracts tab by default", () => {
    render(
      <Tabs
        activeTab="contracts"
        onTabChange={vi.fn()}
      />
    );

    expect(
      screen.getByRole("tab", {
        name: /my contracts/i,
      })
    ).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("should call onTabChange when My Cash Kicks tab is clicked", async () => {
    const user = userEvent.setup();

    const handleTabChange = vi.fn();

    render(
      <Tabs
        activeTab="contracts"
        onTabChange={handleTabChange}
      />
    );

    await user.click(
      screen.getByRole("tab", {
        name: /my cash kicks/i,
      })
    );

    expect(handleTabChange).toHaveBeenCalled();
  });
});