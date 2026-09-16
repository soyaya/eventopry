import type { Preview } from "@storybook/nextjs";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        "eventopry-base": { name: "eventopry-base", value: "#FFFBE9" },
        white: { name: "white", value: "#ffffff" },
        dark: { name: "dark", value: "#0B151F" }
      }
    },
    nextjs: {
      appDirectory: true,
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "eventopry-base"
    }
  }
};

export default preview;
