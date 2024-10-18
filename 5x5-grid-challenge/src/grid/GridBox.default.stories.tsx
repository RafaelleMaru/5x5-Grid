import type { Meta, StoryObj } from '@storybook/react';

import GridBox from './GridBox';

const meta = {
	component: GridBox,
} satisfies Meta<typeof GridBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placement: '2,2 EAST',
	},
};

export const WithError: Story = {
	args: {
		placement: 'A,A NORTH',
	},
};

export const GridBoundery44WEST: Story = {
	args: {
		placement: '4,4 WEST',
	},
};
