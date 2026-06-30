import { render, screen } from "@testing-library/react";

import CashKicksTable from "./CashKicksTable";

import type { CashKick } from "../../../types/cashAcceleration.types";

const cashKicks: CashKick[] = [
  {
    id: "1",
    name: "My First Advance",
    status: "Pending",
    maturity: "Apr 03, 2022",
    totalReceived: "$150,000.00",
    totalFinanced: "$170,454.55",
  },
];

describe("CashKicksTable", () => {
  test("should render table headers", () => {
    render(<CashKicksTable cashKicks={cashKicks} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Maturity")).toBeInTheDocument();
    expect(screen.getByText("Total Received")).toBeInTheDocument();
    expect(screen.getByText("Total Financed")).toBeInTheDocument();
  });

  test("should render cash kick data", () => {
    render(<CashKicksTable cashKicks={cashKicks} />);

    expect(
      screen.getByText("My First Advance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Pending")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Apr 03, 2022")
    ).toBeInTheDocument();

    expect(
      screen.getByText("$150,000.00")
    ).toBeInTheDocument();

    expect(
      screen.getByText("$170,454.55")
    ).toBeInTheDocument();
  });

  test("should render pending status badge", () => {
    render(<CashKicksTable cashKicks={cashKicks} />);

    expect(
      screen.getByText("Pending")
    ).toBeInTheDocument();
  });

  test("should render one data row", () => {
    render(<CashKicksTable cashKicks={cashKicks} />);

    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(2);
  });
});