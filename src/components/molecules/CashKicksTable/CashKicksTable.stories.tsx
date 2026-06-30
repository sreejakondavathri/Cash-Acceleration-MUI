import type { Meta, StoryObj } from "@storybook/react";

import CashKicksTable from "./CashKicksTable";

const meta: Meta<typeof CashKicksTable> = {
  title: "Molecules/CashKicksTable",
  component: CashKicksTable,
};

export default meta;

type Story = StoryObj<typeof CashKicksTable>;

export const Default: Story = {
  args: {
    cashKicks: [
      {
        id: "1",
        name: "My First Advance",
        status: "Pending",
        maturity: "Apr 03, 2022",
        totalReceived: "$150,000.00",
        totalFinanced: "$170,454.55",
      },
    ],
  },
};