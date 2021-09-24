import MyGoogle from '../../components/modules/account/GoogleSignIn.vue';

export default {
	title: 'Account/GoogleSignIn',
	component: MyGoogle,
};

const Template = args => ({
	components: { MyGoogle },
	setup() {
		return { args };
	},
	template: '<MyGoogle/>',
});

export const GoogleButton = Template.bind({});
