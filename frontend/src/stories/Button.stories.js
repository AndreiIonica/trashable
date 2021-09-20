import MyButton from '../components/Button.vue';

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
