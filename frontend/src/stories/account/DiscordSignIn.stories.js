import MyDiscord from '../../components/modules/account/DiscordSignIn.vue';

export default {
	title: 'Account/DiscordSignIn',
	component: MyDiscord,
};

const Template = args => ({
	components: { MyDiscord },
	setup() {
		return { args };
	},
	template: '<MyDiscord/>',
});

export const DiscordButton = Template.bind({});
