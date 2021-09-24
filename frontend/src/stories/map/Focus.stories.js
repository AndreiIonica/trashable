import MyFocus from '../../components/modules/map/Focus.vue';

export default {
	title: 'Map/Focus',
	component: MyFocus,
};

const Template = args => ({
	components: { MyFocus },
	setup() {
		return { args };
	},
	template: '<MyFocus/>',
});

export const FocusBtn = Template.bind({});
