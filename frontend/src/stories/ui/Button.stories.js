import MyButton from '../../components/ui/Button.vue';

export default {
	title: 'UI/Button',
	component: MyButton,
};

const Template = args => ({
	components: { MyButton },
	setup() {
		return { args };
	},
	template: '<MyButton v-bind="args">{{ args.text }}</MyButton>',
});

export const StartButton = Template.bind({});
StartButton.args = {
	text: 'START',
};
export const Closest = Template.bind({});
Closest.args = {
	text: 'IN APROPIERE',
};

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
	text: 'LARGE',
	size: 'large',
};

export const ButtonNormal = Template.bind({});
ButtonNormal.args = {
	text: 'NORMAL',
	size: 'normal',
};

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
	text: 'SMALL',
	size: 'small',
};
