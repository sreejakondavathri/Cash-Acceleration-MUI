import type { Meta, StoryObj } from "@storybook/react";

import CashAcceleration from "./CashAcceleration";

const meta: Meta<typeof CashAcceleration> = {
  title: "Organisms/CashAcceleration",
  component: CashAcceleration,
};

export default meta;

type Story = StoryObj<typeof CashAcceleration>;

export const Default: Story = {};