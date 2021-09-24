import MyReturn from '../../components/ui/ReturnButton.vue';

export default {
	title: 'UI/Return',
	component: MyReturn,
};

const Template = args => ({
	components: { MyReturn },
	setup() {
		return { args };
	},
	template: '<MyReturn/>',
});

export const ReturnBtn = Template.bind({});
