import MyMenu from '../../components/modules/map/TopMenu.vue';

export default {
	title: 'Map/Menu',
	component: MyMenu,
};

const Template = args => ({
	components: { MyMenu },
	setup() {
		return { args };
	},
	template: '<MyMenu/>',
});

export const MenuUI = Template.bind({});
