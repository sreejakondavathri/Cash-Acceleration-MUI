import type { Meta, StoryObj } from "@storybook/react";

import ContractsTable from "./ContractsTable";

const meta: Meta<typeof ContractsTable> = {
  title: "Molecules/ContractsTable",
  component: ContractsTable,
};

export default meta;

type Story = StoryObj<typeof ContractsTable>;

export const Default: Story = {
  args: {
    contracts: [
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
      {
        id: "2",
        name: "Contract 2",
        type: "Monthly",
        perPayment: "$6,000.00",
        termLength: "12 months",
        fee: "12.0% fee",
        paymentAmount: "$23,277.36",
        financedAmount: "$63,380.00",
      },
    ],
  },
};