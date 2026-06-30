import type { Meta, StoryObj } from "@storybook/react";

import EmptyState from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Molecules/EmptyState",
  component: EmptyState,
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Contracts: Story = {
  args: {
    message: "No Contracts Found",
  },
};

export const CashKicks: Story = {
  args: {
    message: "No Cash Kicks Found",
  },
};