import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CashAcceleration from "./CashAcceleration";

import * as service from "../../../services/cashAccelerationService";

vi.mock("../../../services/cashAccelerationService");

const mockedService = vi.mocked(service);

describe("CashAcceleration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should render heading", async () => {
    mockedService.getContracts.mockResolvedValue([]);

    mockedService.getCashKicks.mockResolvedValue([]);

    render(<CashAcceleration />);

    expect(
      screen.getByText("Cash Acceleration")
    ).toBeInTheDocument();
  });

  test("should display contracts after loading successfully", async () => {
    mockedService.getContracts.mockResolvedValue([
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
    ]);

    mockedService.getCashKicks.mockResolvedValue([]);

    render(<CashAcceleration />);

    expect(
      await screen.findByText("Contract 1")
    ).toBeInTheDocument();
  });

  test("should switch to the My Cash Kicks tab when it is clicked", async () => {
    const user = userEvent.setup();

    mockedService.getContracts.mockResolvedValue([]);

    mockedService.getCashKicks.mockResolvedValue([
      {
        id: "1",
        name: "My First Advance",
        status: "Pending",
        maturity: "Apr 03, 2022",
        totalReceived: "$150,000.00",
        totalFinanced: "$170,454.55",
      },
    ]);

    render(<CashAcceleration />);

    await user.click(
      screen.getByRole("tab", {
        name: /my cash kicks/i,
      })
    );

    expect(
      await screen.findByText("My First Advance")
    ).toBeInTheDocument();
  });

  test("should display the empty contracts state when no contracts are available", async () => {
    mockedService.getContracts.mockResolvedValue([]);

    mockedService.getCashKicks.mockResolvedValue([]);

    render(<CashAcceleration />);

    expect(
      await screen.findByText(
        "No Contracts Found"
      )
    ).toBeInTheDocument();
  });

  test("should display the empty cash kicks state when no cash kicks are available", async () => {
    const user = userEvent.setup();

    mockedService.getContracts.mockResolvedValue([]);

    mockedService.getCashKicks.mockResolvedValue([]);

    render(<CashAcceleration />);

    await user.click(
      screen.getByRole("tab", {
        name: /my cash kicks/i,
      })
    );

    expect(
      await screen.findByText(
        "No Cash Kicks Found"
      )
    ).toBeInTheDocument();
  });

  test("should display an error message when data loading fails", async () => {
    mockedService.getContracts.mockRejectedValue(
      new Error("Failed")
    );

    mockedService.getCashKicks.mockRejectedValue(
      new Error("Failed")
    );

    render(<CashAcceleration />);

    await waitFor(() => {
      expect(
        screen.getByText("Failed to load data")
      ).toBeInTheDocument();
    });
  });
});