/* eslint-disable import/no-extraneous-dependencies */
import MyButton from '../components/ui/Button.vue';

export default {
	title: 'Button',
	component: MyButton,
};

const Template = args => ({
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
export const StartButton = Template.bind({});
StartButton.args = {
	text: 'START',
	size: 'large',
};
