/* eslint-disable import/no-extraneous-dependencies */
import { Story } from '@storybook/vue3';
import MyButton from '../components/Button.vue';

export default {
	title: 'Button',
	component: MyButton,
	args: { text: 'Text' },
};

export interface ButtonStoryI {
	text: string;
}

const Template: Story<ButtonStoryI> = args => ({
	components: { MyButton },
	setup() {
		return { args };
	},
	template: '<MyButton v-bind="args">{{ args.text }}</MyButton>',
});

export const Primary = Template.bind({});
Primary.args = {
	text: 'Primary Button',
};
