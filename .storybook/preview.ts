import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
// import { withJsx } from "../dist/index.js";
import { withJsx } from "@mihkeleidast/storybook-addon-source";

import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withJsx],
  tags: ["autodocs"],
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
