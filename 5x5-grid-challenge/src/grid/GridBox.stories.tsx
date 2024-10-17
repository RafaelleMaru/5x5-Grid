import type { Meta, StoryObj } from '@storybook/react';

import GridBox from './GridBox';

const meta: Meta<typeof GridBox> = {
	component: GridBox,
	title: 'GridBox',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {},
};
