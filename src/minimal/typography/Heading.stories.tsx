import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta = {
  // title: "minimal/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
      description: "The content of the heading.",
    },
    className: {
      control: "text",
      description:
        "`classNames` to override or add aditional styling with Tailwind CSS.",
    },
    type: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description:
        "The type of heading, influences the tag to be used, such as h1, h2, h3. It also add the style variant based on the given tag.",
    },
    spacing: {
      control: "select",
      options: ["none", "default"],
      description: "The overall spacing of the heading.",
    },
    font: {
      control: "select",
      options: ["sans", "serif"],
      description:
        "The font family of the heading. You can add additional custom font if need be, make sure to add the font to the tailwind config.",
    },
    variant: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6],
      description:
        "The style of the heading, if you need to override the style for any other reason.",
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    className: undefined,
    type: 1,
    spacing: undefined,
    font: undefined,
    variant: undefined,
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    className: undefined,
    type: 2,
    spacing: undefined,
    font: undefined,
    variant: undefined,
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading 3",
    className: undefined,
    type: 3,
    spacing: undefined,
    font: undefined,
    variant: undefined,
  },
};

export const Heading4: Story = {
  args: {
    children: "Heading 4",
    className: undefined,
    type: 4,
    spacing: undefined,
    font: undefined,
    variant: undefined,
  },
};

export const Heading5: Story = {
  args: {
    children: "Heading 5",
    className: undefined,
    type: 5,
    spacing: undefined,
    font: undefined,
    variant: undefined,
  },
};

export const Heading6: Story = {
  args: {
    children: "Heading 6",
    className: undefined,
    type: 6,
    spacing: undefined,
    font: undefined,
    variant: undefined,
  },
};
