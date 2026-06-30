import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "../src/theme/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;