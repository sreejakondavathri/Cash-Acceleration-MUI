import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Molecules/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Contracts: Story = {
  args: {
    activeTab: "contracts",
    onTabChange: () => {},
  },
};

export const CashKicks: Story = {
  args: {
    activeTab: "cashKicks",
    onTabChange: () => {},
  },
};