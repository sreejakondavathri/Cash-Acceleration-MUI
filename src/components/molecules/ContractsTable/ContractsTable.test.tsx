import { render, screen } from "@testing-library/react";

import ContractsTable from "./ContractsTable";

import type { Contract } from "../../../types/cashAcceleration.types";

const contracts: Contract[] = [
  {
    id: "1",
    name: "Contract 1",
    type: "Monthly",
    perPayment: "$12,000.25",
    termLength: "12 months",
    fee: "12.0% fee",
    paymentAmount: "$126,722.64",
    financedAmount: "$63,380.00",
  },
];

describe("ContractsTable", () => {
  test("renders table headers", () => {
    render(<ContractsTable contracts={contracts} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Per Payment")).toBeInTheDocument();
    expect(screen.getByText("Term Length")).toBeInTheDocument();
    expect(screen.getByText("Payment Amount")).toBeInTheDocument();
  });

  test("renders contract data", () => {
    render(<ContractsTable contracts={contracts} />);

    expect(screen.getByText("Contract 1")).toBeInTheDocument();
    expect(screen.getByText("Monthly")).toBeInTheDocument();
    expect(screen.getByText("$12,000.25")).toBeInTheDocument();
    expect(screen.getByText("12 months")).toBeInTheDocument();
    expect(screen.getByText("12.0% fee")).toBeInTheDocument();
    expect(screen.getByText("$126,722.64")).toBeInTheDocument();
    expect(screen.getByText("$63,380.00")).toBeInTheDocument();
  });

  test("renders one data row", () => {
    render(<ContractsTable contracts={contracts} />);

    const rows = screen.getAllByRole("row");

    // Header row + 1 data row
    expect(rows).toHaveLength(2);
  });
});